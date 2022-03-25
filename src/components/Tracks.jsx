import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { List, ListItem } from "@chakra-ui/react";
import { fetchTopTracks } from "../data";

export default function Tracks() {
  const { artist_url } = useParams();

  const artistTracksData = useQuery(
    ["artist", artist_url],
    () => fetchTopTracks(artist_url),
    {
      retry: false,
    }
  );

  const artistTracks = artistTracksData?.data?.data?.toptracks?.track;

  return (

    <List spacing={3}>
    {artistTracks?.map((item) => (
     <ListItem>
        <Card key={artist_url} item={item} />
     </ListItem>
      ))}
     </List>

  );
}
