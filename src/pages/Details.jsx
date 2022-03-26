import React from "react";
import { useParams } from "react-router-dom";
import {
  Center,
  Wrap,
  Heading,
  Flex,
  Box,
  SimpleGrid,
  Image,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import Card from "../components/Card";
import { List, ListItem } from "@chakra-ui/react";
import { fetchTopAlbums, fetchTopTracks, fetchArtistInfo } from "../api";

export default function Details() {
  const { artist_url } = useParams();

  // FETCH ARTIST INFO
  const artistInfoData = useQuery(
    ["info", artist_url],
    () => fetchArtistInfo(artist_url),
    {
      select: (data) => data.data.artist,
      retry: false,
    }
  );

  const artistInfo = artistInfoData?.data;

  // FETCH ALBUMS
  const artistAlbumsData = useQuery(
    ["albums", artist_url],
    () => fetchTopAlbums(artist_url),
    {
      select: (data) => data.data.topalbums.album,
      retry: false,
    }
  );

  const artistAlbums = artistAlbumsData?.data;

  // FETCH TRACKS
  const artistTracksData = useQuery(
    ["tracks", artist_url],
    () => fetchTopTracks(artist_url),
    {
      select: (data) => data.data.toptracks.track,
      retry: false,
    }
  );

  const artistTracks = artistTracksData?.data;

  return (
    <Wrap>
       <Center p={5}>
        <Box
          role={"group"}
          p={5}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <SimpleGrid columns={{ md: 3 }}>
            <Image
              rounded={"lg"}
              width={20}
              height={20}
              marginLeft={10}
              objectFit={"cover"}
              src={artistInfo?.image[1]["#text"]}
            />
            <Box>
              <Heading
                py={4}
                fontSize={25}
                fontFamily={"body"}
                fontWeight={700}
              >
                {artistInfo?.name}
              </Heading>
              <Divider />
            </Box>
          </SimpleGrid>
        </Box>
    </Center>

      <Flex>
      
      <Box
          role={"group"}
          p={5}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          w={"full"}
        >
       
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700} m={3}>
            TOP ALBUMS
          </Heading>

          <List spacing={3}>
            {artistAlbums?.map((item, index) => (
              <ListItem>
                <Card key={index} item={item} />
              </ListItem>
            ))}
          </List>
         </Box>
      
        <Box
          role={"group"}
          p={5}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700} m={3}>
            TOP TRACKS
          </Heading>

          <List spacing={3}>
            {artistTracks?.map((item, index) => (
              <ListItem>
                <Card key={index} item={item} />
              </ListItem>
            ))}
          </List>
        </Box>
        </Flex>
    </Wrap>
  );
}
