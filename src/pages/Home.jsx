import React, { useEffect } from "react";
import { useQueries } from "react-query";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopArtists } from "../api";
import Artist from "../components/Artist";
import { loadMoreArtists, resetLoad } from "../reduxStore/loadMore";
import {
  Heading,
  Container,
  Center,
  List,
  ListItem,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

export default function Home() {
  const dispatch = useDispatch();
  const { load } = useSelector((state) => state);
  const params = useParams();

  const artists = useQueries(
    load.map((page) => {
      return {
        queryKey: ["artists", page],
        queryFn: () => fetchTopArtists(page),
        select: (state) => state?.data?.artists?.artist,
        enabled: false,
        keepPreviousData: true,
        cacheTime: 0,
      };
    })
  );
  // FETCH TOP ARTISTS
  // const topArtistsData = useQueries(
  //   ["artist", page],
  //   () => fetchTopArtists(page),
  //   {
  //     select: (data) => data.data.artists.artist,
  //     retry: false,
  //   }
  // );

  useEffect(() => {
    artists[0].refetch();
    dispatch(resetLoad());
  }, []);

  useEffect(() => {
    artists[load[load.length - 1] - 1]?.refetch();
  }, [load, load.length, params.type]);

  console.log("ARTISTS:::", artists);

  return (
    <Container>
      <Center m={3}>
        <Heading>TOP ARTISTS</Heading>
      </Center>

      <List spacing={3}>
        {artists?.data?.map((item) =>
          item?.isLoading ? (
            <h5>Loading...</h5>
          ) : (
            <ListItem>
              <Artist
                height={"280"}
                width={"180"}
                item={item}
              />
            </ListItem>
          )
        )}
      </List>

      <Box>
        {artists[artists?.length - 1]?.data?.length === 0 ? (
          <Text>No more results found!</Text>
        ) : (
          <Button
            onClick={() => {
              dispatch(loadMoreArtists());
            }}
          >
            Load More
          </Button>
        )}
      </Box>

      {/* <List spacing={3}>
        {artists?.data?.map((item) => (
          <ListItem>
            <Artist item={item} />
          </ListItem>
        ))}
      </List> */}

      {/* {data?.map((item) => (
          <Card item={item} />
        ))}
      
      {data?.length === 0 && <NotFound />} */}
    </Container>
  );
}
