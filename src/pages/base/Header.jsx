import React from "react";
import logoLastfm from '../../assets/lastfm_logo.png';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
  Link
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.300", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link data-testid="header" href="/" >
            <Image src={logoLastfm} alt={"logoLastfm"} width={50} height={50} />
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
