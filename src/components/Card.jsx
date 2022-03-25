import React from "react";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
  SimpleGrid
} from "@chakra-ui/react";

export default function Card({ item }) {
  return (
    
<Box
  role={"group"}
  p={5}
  maxW={"500px"}
  w={"full"}
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
      src={item.image[2]["#text"]}
    />
     <Box>
        <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700}>
          {item.name}
        </Heading>
        <Divider p={1} />
      <Stack direction={"row"} align={"center"}>
            <Text fontWeight={600} fontSize={"md"}>
              Artist:
            </Text>
            <Text color={"gray.600"}>{item.artist.name}</Text>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={600} fontSize={"md"}>
              Playcount:
            </Text>
            <Text color={"gray.600"}>{item.playcount}</Text>
          </Stack>
    </Box>
  </SimpleGrid>
</Box>

  );
}
