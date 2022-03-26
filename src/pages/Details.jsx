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
import { fetchArtistInfo } from "../api";
import Albums from "../components/Albums";
import Tracks from "../components/Tracks";

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
          
          <Albums />
        </Box>

        <Box role={"group"} p={5} rounded={"lg"} pos={"relative"} zIndex={1}>
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700} m={3}>
            TOP TRACKS
          </Heading>

          <Tracks />
          
        </Box>
      </Flex>
    </Wrap>
  );
}
