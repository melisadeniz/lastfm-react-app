import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { List, ListItem } from "@chakra-ui/react";
import { fetchTopAlbums } from "../api";

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
      {artistAlbums?.map((item) => (
        <ListItem>
          <Card key={artist_url} item={item} />
        </ListItem>
      ))}
    </List>
  );
}
