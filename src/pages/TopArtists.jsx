import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import Artist from "../components/Artist";
import { API_KEY } from "../api";
import {
  Heading,
  Wrap,
  Center,
  List,
  ListItem,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

export default function TopArtists() {
  //FETCH TOP ARTISTS
  const fetchTopArtists = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=50&page=${pageParam}`
    );
    return response.json();
  };

  const { data, isLoading, isError, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["artists"], fetchTopArtists, {
      getNextPageParam: (_lastpage, pages) => {
        if (pages.length <= 83349) {
          // "totalPages": "83349"
          // pages.artists[0]['@attr'].totalPages ??

          return [pages.length + 1] + 1;
        } else {
          return undefined;
        }
      },
    });

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
  }, []);

  if (isLoading) {
    return (
      <Center m={3}>
        <Text>Loading...</Text>
      </Center>
    );
  }

  if (isError) {
    return (
      <Center m={3}>
        <Text>{error.message}</Text>
      </Center>
    );
  }

  return (
    <Wrap>
      <Center m={3}>
        <Heading>TOP ARTISTS</Heading>
      </Center>

      <Box>
        <List>
          {data?.pages.map((page) =>
            page.artists.artist.map((item, index) => (
              <ListItem key={index}>
                <Artist height={"280"} width={"180"} item={item} />
              </ListItem>
            ))
          )}
        </List>
      </Box>

      <Center p={5}>
        <Button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load More
        </Button>
      </Center>

      {/* {data?.length === 0 && <NotFound />} */}
    </Wrap>
  );
}
