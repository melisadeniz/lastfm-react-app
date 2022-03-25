import React from "react";
import { useQuery } from "react-query";
import { fetchTopArtists } from "../data";
import Artist from "../components/Artist"
import { Text, Stack} from '@chakra-ui/react';;

export default function Home() {
;
  
  const topArtistsData = useQuery("discover movies", fetchTopArtists, {
    select: (data) => data.data.artists.artist,
    retry: false,
  });

  return (
    <Stack>
      <div className="title d-flex">
        <Text>
          TOP ARTISTS
        </Text>
      </div>
      <ul>
        {topArtistsData?.data?.map((item) => (
          <li key={item.mbid} >
            <Artist item={item} />
          </li>
        ))}
      </ul>

      {/* {data?.map((item) => (
          <Card item={item} />
        ))}
      
      {data?.length === 0 && <NotFound />} */}
    </Stack>
  );
}
