import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { fetchTopAlbums } from "../data";


export default function Albums() {
  const { mbid } = useParams();

  const artistAlbumsData = useQuery(
    ["artist", mbid],
    () => fetchTopAlbums(mbid),
    {
      retry: false,
    }
  );

  const artistAlbums = artistAlbumsData?.data?.data?.topalbums?.album;

  return (
    <div>
      <ul>
        {artistAlbums?.map((item) => (
          <li key={item.artist.mbid}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}