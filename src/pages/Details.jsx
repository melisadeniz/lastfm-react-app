import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchTopAlbums, fetchTopTracks } from "../data";

export default function Details() {
  const { artistName } = useParams();

  const artistAlbumsData = useQuery(
    ["artist", artistName],
    () => fetchTopAlbums(artistName),
    {
      retry: false,
    }
  );

  const artistTracksData = useQuery(
    ["artist", artistName],
    () => fetchTopTracks(artistName),
    {
      retry: false,
    }
  );

  return (
    //Use item.image[3]['#text'] instead of item.image
    <div>Details</div>
  );
}
