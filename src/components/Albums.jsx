import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { List, ListItem } from "@chakra-ui/react";
import { fetchTopAlbums } from "../api";
import Card from "./Card";

export default function Albums() {
  const { artist_url } = useParams();

  // FETCH ALBUMS
  const artistAlbumsData = useQuery(
    ["albums", artist_url],
    () => fetchTopAlbums(artist_url),
    {
      retry: false,
    }
  );

  const artistAlbums = artistAlbumsData?.data?.data?.topalbums?.album;

  return (
    <List spacing={3}>
      {artistAlbums?.map((album, index) => (
        <ListItem key={index}>
          <Card props={album} />
        </ListItem>
      ))}
    </List>
  );
}
