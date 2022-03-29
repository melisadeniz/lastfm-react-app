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
  const {  name, playcount, artist, image, listeners } =
    item;
  return (
    <Box
      p={4}
      minWidth={"fit-conten"}
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
          objectFit={"cover"}
          src={image[1]["#text"]}
        />
        <Box px={5}>
          <Heading fontSize={20} fontFamily={"body"} fontWeight={600}>
            {name}
          </Heading>
          <Divider p={1} />
          <Stack direction={"row"} align={"center"}>
            <Text fontSize={"sm"} color={"gray.600"}>{artist.name}</Text>
          </Stack>
      
          <Stack direction={"row"} align={"center"}>
            <Text fontSize={"sm"} color={"gray.600"}>{playcount} plays</Text>
         <Divider orientation={"vertical"}/>   
            <Text style={{
              display:
                listeners === "" ||
                listeners === null ||
                listeners === undefined
                  ? "none"
                  : "block",
            }} fontSize={"sm"} color={"gray.600"}>{listeners} listeners</Text>
        </Stack>
        
         </Box>
      </Flex>
    </Box>
  );
}
