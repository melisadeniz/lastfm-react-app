import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import Artist from "../components/Artist";
import { Heading, Container, Center, List, ListItem, Button } from "@chakra-ui/react";

export default function Home() {
  //FETCH TOP ARTISTS
  const fetchTopArtists = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e908f48f816b4a2314e9ddeeb138077f&format=json&limit=50&page=${pageParam}`
    );
    return response.json();
  };

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["artists"],
    fetchTopArtists,
    {
      getNextPageParam: (_lastpage, pages) => {
        if (pages.length < 83349) {
          // "totalPages": "83349"
          // pages.artists[0]['@attr'].totalPages

          return [pages.length + 1] + 1;
        } else {
          return undefined;
        }
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

      <Center p={5}>
   <Button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</Button>
 </Center>

      {/* {data?.length === 0 && <NotFound />} */}
    </Container>
  );
}
