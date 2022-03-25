import React from "react";
import { useParams } from "react-router-dom";
import { Box, SimpleGrid} from '@chakra-ui/react';
// import DetailCard from "../components/DetailCard";
import Albums from "../components/Albums";
import Tracks from "../components/Tracks";

export default function Details() {

  const { mbid } = useParams();

  

  return (
   
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>


        <Albums key={mbid} />
      

        <Tracks key={mbid} />
  

      </SimpleGrid>
    </Box>


  );
}
