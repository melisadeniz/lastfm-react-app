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
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

export default function Artist({ item }) {
  
  const artist_url = decodeURI(item.name);

  return (
    <Center py={3}>
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
            <Link href={`/artist/${artist_url}`}>
              
              <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700}>
                {item.name}
              </Heading>
              <Divider p={1} />
            </Link>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={600} fontSize={"md"}>
                Playcount:
              </Text>
              <Text color={"gray.600"}>{item.playcount}</Text>
            </Stack>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={600} fontSize={"md"}>
                Listeners:
              </Text>
              <Text color={"gray.600"}>{item.listeners}</Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
}
