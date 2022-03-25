import React from "react";
import { useParams } from "react-router-dom";
import { Container, Heading, Flex, Box, Center, SimpleGrid, Image } from "@chakra-ui/react";
import Albums from "../components/Albums";
import Tracks from "../components/Tracks";

export default function Details({item}) {
  const { artist_url } = useParams();

  return (
    <Container>
     <Center py={3}>
      <Box
        role={"group"}
        p={5}
        maxW={"500px"}
        w={"full"}
        // bg={useColorModeValue("white", "gray.900")}
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
            // src={item.image[2]["#text"]}
          />
          <Box>
              
              <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700}>
                {/* {item.name} */}
              </Heading>
              </Box>
        </SimpleGrid>
      </Box>    
      </Center>
      <Flex>
        <Box>
        <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700}>TOP ALBUMS</Heading>

        <Albums key={artist_url} />
        </Box>
        <Box>
        <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700}>TOP TRACKS</Heading>

        <Tracks key={artist_url} />
        </Box>
      </Flex>

      {/* {data?.map((item) => (
    <Card item={item} />
  ))}

{data?.length === 0 && <NotFound />} */}
    </Container>
  );
}
