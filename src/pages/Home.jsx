import React from "react";
import { useQuery } from "react-query";
import { fetchTopArtists } from "../api";
import Artist from "../components/Artist";
import { Heading, Container, Center, List, ListItem } from "@chakra-ui/react";

export default function Home() {
  // FETCH TOP ARTISTS
  const topArtistsData = useQuery("discover movies", fetchTopArtists, {
    select: (data) => data.data.artists.artist,
    retry: false,
  });

  return (
    <Container>
      <Center m={3}>
        <Heading>TOP ARTISTS</Heading>
      </Center>

      <Center>
        <List spacing={3}>
          {topArtistsData?.data?.map((item) => (
            <ListItem>
              <Artist item={item} />
            </ListItem>
          ))}
        </List>

        {/* {data?.map((item) => (
          <Card item={item} />
        ))}
      
      {data?.length === 0 && <NotFound />} */}
      </Center>
    </Container>
  );
}
