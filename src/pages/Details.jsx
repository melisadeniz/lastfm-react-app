import React from "react";
import { useParams } from "react-router-dom";
import { Container, Heading, SimpleGrid, List, ListItem, Grid } from "@chakra-ui/react";
// import DetailCard from "../components/DetailCard";
import Albums from "../components/Albums";
import Tracks from "../components/Tracks";

export default function Details() {
  const { mbid } = useParams();

  return (
<Container>
<SimpleGrid>
  
  <Heading>TOP ALBUMS</Heading>

       <Albums key={mbid} />

  </SimpleGrid>
  <SimpleGrid>

   <Heading>TOP TRACKS</Heading>

      <Tracks key={mbid} />
  </SimpleGrid>
  
  {/* {data?.map((item) => (
    <Card item={item} />
  ))}

{data?.length === 0 && <NotFound />} */}

</Container>
  );
}
