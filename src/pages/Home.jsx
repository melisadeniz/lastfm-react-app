import React from "react";
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
  async function fetchTopArtists(pageParam = 1) {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=50&page=` +
        pageParam
    );
    const data = await response.json();
    return data;
  };


  //API call to show top artists list with react-query infinite scroll
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery("topArtists", fetchTopArtists,
    {
      getNextPageParam: (lastPage, allPages) => lastPage + 1,
    }
  );


  console.log(data);

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
                  <Artist height={"280"} width={"180"} artist={item} />
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
