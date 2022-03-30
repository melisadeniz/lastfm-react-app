import React from "react";
import { Container, Center } from "@chakra-ui/react";
import { HeadingStyle } from "../styles/Heading";
import TopArtists from "../components/TopArtists";

export default function Home() {
  return (
    <Container>
      <Center m={5}>
        <HeadingStyle>
          <div className="typewriter">
            <h1 data-testid="welcome-heading">Welcome to Last.fm!</h1>
          </div>
        </HeadingStyle>
      </Center>
      <TopArtists />
    </Container>
  );
}
