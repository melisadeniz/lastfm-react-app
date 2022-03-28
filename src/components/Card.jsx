import React from "react";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
  Flex,
} from "@chakra-ui/react";

export default function Card({ item }) {
  return (
    <Box
      p={4}
      minWidth={"fit-content"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Flex
      >
        <Image
          rounded={"lg"}
          width={20}
          height={20}
          objectFit={"cover"}
          src={item.image[1]["#text"]}
        />
        <Box px={5}>
          <Heading fontSize={20} fontFamily={"body"} fontWeight={650}>
            {item.name}
          </Heading>
          <Divider p={1} />
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={600} fontSize={15}>
              Artist:
            </Text>
            <Text color={"gray.600"}>{item.artist.name}</Text>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={600} fontSize={15}>
              Playcount:
            </Text>
            <Text color={"gray.600"}>{item.playcount}</Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
