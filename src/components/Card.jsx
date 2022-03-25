import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

export default function Card({ item }) {
  return (
    <Center py={3}>
      <Box
        role={"group"}
        p={5}
        maxW={"630px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"20px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        ></Box>
        <Stack pt={10} align={"left"}>
          {/* <Image
            rounded={'lg'}
            height={100}
            width={100}
            objectFit={'cover'}
            src={item.image[3]['#text']}
          /> */}
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={700}>
            {item.name}
          </Heading>
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
        </Stack>
      </Box>
    </Center>
  );
}
