import React from "react";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
  Grid,
} from "@chakra-ui/react";

export default function Card({ item }) {
  return (
    <Box
      p={4}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
    >
      <Grid
      >
        <Image
          rounded={"lg"}
          width={20}
          height={20}
          objectFit={"cover"}
          src={item.image[2]["#text"]}
        />
        <Box>
          <Heading fontSize={20} fontFamily={"body"} fontWeight={700}>
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
      </Grid>
    </Box>
  );
}
