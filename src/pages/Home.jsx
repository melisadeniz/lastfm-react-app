import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import Artist from "../components/Artist";
import { API_KEY } from "../api";
import {
  Heading,
  Container,
  Center,
  List,
  ListItem,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { HeadingStyle } from "../styles/Heading";

export default function Home() {
  //FETCH TOP ARTISTS
  const fetchTopArtists = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&page=${pageParam}`
    );
    return response.json();
  };

  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["artists"], fetchTopArtists, {
    getNextPageParam: (pages) => {
      if (pages.length < pages.artists[0]["@attr"].totalPages) {
        // "totalPages": "83349"
        // pages.artists[0]['@attr'].totalPages

        return [pages.length + 1] + 1;
      } else {
        return undefined;
      }
    },
  });

  console.log(data);

  //Infinite Scroll
  useEffect(() => {
    let fetching = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //isLoading
  if (isLoading) {
    return (
      <Center m={3}>
        <Text>Loading...</Text>
      </Center>
    );
  }

  //isError
  if (isError) {
    return (
      <Center m={3}>
        <Text>{error.message}</Text>
      </Center>
    );
  }

  return (
    <Container>
      <Center m={5}>
        <HeadingStyle>
          <div className="typewriter">
            <h1 data-testid="welcome-heading">Welcome to Last.fm!</h1>
          </div>
        </HeadingStyle>
      </Center>
      <Center mt={10}>
        <Heading fontSize={"3xl"} fontFamily={"body"} fontWeight={700}>
          TOP ARTISTS
        </Heading>
      </Center>

      <Box>
        <List>
          {data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.artists.artist.map((item, index) => (
                <ListItem key={index}>
                  <Artist height={"280"} width={"180"} item={item} />
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
      </Box>

      <Center p={5}>
        <Box>
          <Button
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </Button>
        </Box>
        <Box>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</Box>
      </Center>
    </Container>
  );
}
