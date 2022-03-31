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

export default function Card({ props }) {
  const { name, playcount, artist, image, listeners } = props;
  return (
    <Box
      p={[1, 2, 3]}
      height={[20, 40]}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
    >
      <Flex>
        <Image
          m={[1, 2, 3]}
          rounded={"lg"}
          width={[10, 20]}
          height={[10, 20]}
          objectFit={"cover"}
          src={image[2]["#text"]}
        />
        <Box m={[1, 2, 3]}>
          <Heading
            fontSize={{ base: "10px", sm: "15px", md: "25px" }}
            fontFamily={"body"}
            fontWeight={600}
          >
            {name}
          </Heading>
          <Divider my={[1, 2]} />
          <Stack my={1} direction={"row"} align={"center"}>
            <Text
              fontSize={{ base: "8px", sm: "12px", md: "18px" }}
              color={"gray.600"}
            >
              {artist.name}
            </Text>
          </Stack>

          <Stack direction={"row"} align={"center"}>
            <Text
              fontSize={{ base: "7px", sm: "10px", md: "15px" }}
              color={"gray.600"}
            >
              {playcount} plays
            </Text>
            <Divider orientation={"vertical"} />
            <Text
              style={{
                display:
                  listeners === "" ||
                  listeners === null ||
                  listeners === undefined
                    ? "none"
                    : "block",
              }}
              fontSize={{ base: "7px", sm: "10px", md: "15px" }}
              color={"gray.600"}
            >
              {listeners} listeners
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
