import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { fetchTopTracks } from "../data";

export default function Tracks() {

  const { mbid } = useParams();
  const artistTracksData = useQuery(
    ["artist", mbid],
    () => fetchTopTracks(mbid),
    {
      retry: false,
    }
  );

  const artistTracks = artistTracksData?.data?.data?.toptracks?.track;

  return (
    <div>
      <ul>
        {artistTracks?.map((item) => (
          <li key={item.artist.mbid}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
