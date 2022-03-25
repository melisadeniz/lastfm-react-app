import React from "react";
import { useQuery } from "react-query";
import { fetchTopArtists } from "../data";
import ArtistCard from "../components/ArtistCard";

export default function Home() {
;
  
  const topArtistsData = useQuery("discover movies", fetchTopArtists, {
    select: (data) => data.data.artists.artist,
    retry: false,
  });

  return (
    <div className="container">
      <div className="title d-flex">
        <h1>TOP ARTISTS</h1>
      </div>
      <ul>
        {topArtistsData?.data?.map((item) => (
          <li key={item.mbid} >
            <ArtistCard item={item} />
          </li>
        ))}
      </ul>

      {/* {data?.map((item) => (
          <Card item={item} />
        ))}
      
      {data?.length === 0 && <NotFound />} */}
    </div>
  );
}
