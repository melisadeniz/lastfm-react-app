import React from "react";
import { useQuery } from "react-query";
import { fetchTopArtists } from "../data";
import Card from "../components/Card"

export default function Home() {

  const topArtistsData = useQuery("discover movies", fetchTopArtists,
    {
      select: (data) => data,
      retry: false,
    }
  );


  return (
    <div className="container">
      <div className="title d-flex">
        <h2>TOP ARTISTS</h2>
      </div>
      
        {/* {data?.map((item) => (
          <Card item={item} />
        ))}
      
      {data?.length === 0 && <NotFound />} */}
    </div>
  );
}
