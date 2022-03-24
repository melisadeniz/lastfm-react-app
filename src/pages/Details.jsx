import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchTopAlbums, fetchTopTracks } from "../data";

export default function Details() {
  const { artist } = useParams();

  const artistAlbumsData = useQuery(
    ["artist", artist],
    () => fetchTopAlbums(artist),
    {
      retry: false,
    }
  );

  const artistTracksData = useQuery(
    ["artist", artist],
    () => fetchTopTracks(artist),
    {
      retry: false,
    }
  );

  return (
    //Use item.image[3]['#text'] instead of item.image
    <div>Details</div>
  );
}
