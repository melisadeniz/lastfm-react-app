import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Box, SimpleGrid} from '@chakra-ui/react';
import DetailCard from "../components/DetailCard";
import { fetchTopAlbums, fetchTopTracks } from "../data";


export default function Details() {

  const { mbid } = useParams();

  const artistAlbumsData = useQuery(
    ["artist", mbid],
    () => fetchTopAlbums(mbid),
    {
      select: (data) => data.data.topalbums.album,
      retry: false
    }
  );

  const artistTracksData = useQuery(
    ["artist", mbid],
    () => fetchTopTracks(mbid),
    {
      select: (data) => data.data.toptracks.track,
      retry: false
    }
  );



  return (
   
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
       
      <ul>
        {artistAlbumsData?.data?.map((item) => (
          <li key={item.mbid}>
            <DetailCard item={item} />
          </li>
        ))}
      </ul>
  
      <ul>
        {artistTracksData?.data?.map((item) => (
          <li key={item.mbid}>
            <DetailCard item={item} />
          </li>
        ))}
      </ul>
      </SimpleGrid>
    </Box>


  );
}
