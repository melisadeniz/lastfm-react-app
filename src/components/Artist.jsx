import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Link,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";

export default function Artist({ artist }) {
  const {  name, playcount, image, listeners } =
  artist;
  // DECODE FOR URL
  const artist_url = decodeURI(name);

  return (
    <Center py={3}>
      <Box
        role={"group"}
        p={3}
        maxW={"500px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Flex>
          <Image
            rounded={"lg"}
            width={20}
            height={20}
            marginLeft={10}
            marginRight={10}
            objectFit={"cover"}
            src={image[1]["#text"]}
          />
          <Box>
            <Link href={`/artist/${artist_url}`}>
              <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={600}>
                {name}
              </Heading>
              <Divider p={1} />
            </Link>
            <Stack direction={"row"} align={"center"}>
              <Text fontSize={"sm"} fontFamily={"body"} color={"gray.600"}>playcount: {playcount}</Text>
            </Stack>
            <Stack direction={"row"} align={"center"}>
              <Text fontSize={"sm"} fontFamily={"body"} color={"gray.600"}>listeners: {listeners}</Text>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
