import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { List, ListItem } from "@chakra-ui/react";
import { fetchTopTracks } from "../api";

export default function Tracks() {
  const { artist_url } = useParams();

  // FETCH TRACKS
  const artistTracksData = useQuery(
    ["tracks", artist_url],
    () => fetchTopTracks(artist_url),
    {
      retry: false,
    }
  );

  const artistTracks = artistTracksData?.data?.data?.toptracks?.track;

  return (
    <List  spacing={3}>
      {artistTracks?.map((item, index) => (
        <ListItem key={index}>
          <Card item={item} />
        </ListItem>
      ))}
    </List>
  );
}
