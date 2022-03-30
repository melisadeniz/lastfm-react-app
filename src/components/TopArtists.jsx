import React from "react";
import { useInfiniteQuery } from "react-query";
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
import { API_KEY } from "../api";
import Artist from "./Artist";

export default function TopArtists() {
  //FETCH TOP ARTISTS
  async function fetchTopArtists() {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=30&page=` +
        1
    );
    if (!response.ok) {
      throw new Error("Response was not OK");
    }
    const data = await response.json();
    return data.artists.artist;
  }

  // React-query infinite scroll
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery("topArtists", fetchTopArtists, {
    getNextPageParam: (lastPage, allPages) => lastPage + 1,
  });

  //isLoading
  if (isLoading) {
    return (
      <Center m={3}>
        <Text data-testid="Loading-text">Loading...</Text>
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
        <Heading fontSize={"3xl"} fontFamily={"body"} fontWeight={700}>
          TOP ARTISTS
        </Heading>
      </Center>

      <Box>
        <List>
          {data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.map((item, index) => (
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
