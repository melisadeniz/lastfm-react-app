import React, {useEffect} from "react";
import { useInfiniteQuery } from "react-query";
// import { fetchTopArtists } from "../api";
import Artist from "../components/Artist";
import {
  Heading,
  Container,
  Center,
  List,
  ListItem,
  Button,
  Text,
} from "@chakra-ui/react";

export default function Home() {


    //FETCH TOP ARTISTS
  const fetchTopArtists = async (page = 1) => {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e908f48f816b4a2314e9ddeeb138077f&format=json&page=${page}`
    );
    return response.json();
  };


  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "artist",
    ({ pageParam = 1 }) => fetchTopArtists(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.total_count / 50;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );


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

  return (
    <Container>
      <Center m={3}>
        <Heading>TOP ARTISTS</Heading>
      </Center>

<div>
      <List>
        {data?.pages.map((page) =>
        page.artists.artist.map((item, index) => (
          <ListItem key={index}>
            <Artist height={"280"} width={"180"} item={item} />
         </ListItem>
        ))
        )}
     </List>
 </div>













      {/* {data?.length === 0 && <NotFound />} */}

      {/* <Center p={5}>
        {topArtistsData[topArtistsData?.length - 1]?.data?.length === 0 ? (
          <Text>No more results found!</Text>
        ) : (
          <Button
          // onClick={() => {
          //   dispatch(loadMoreArtists());
          // }}
          >
            Load More
          </Button>
        )}
      </Center> */}
    </Container>
  );
}
