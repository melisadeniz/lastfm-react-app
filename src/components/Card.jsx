import React from 'react'
import { CardStyle } from '../styles/CardStyle'

export default function Card({item}) {
  return (
    <CardStyle>
    {/* <Link to={`/movie/${item.id}`}> */}
      <div key={item.id}>
        <div className="cardtitle">
          <span
            className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary ${
              item.vote_average > 6 ? "bg-primary" : "bg-danger"
            }`}
          >
            {item.vote_average}
          </span>
          <b className="title">{item.title}</b>
          <span className="subtitle">
            <div></div>
            <span className="subtitle">{item.release_date}</span>
          </span>
        </div>
      </div>
    {/* </Link> */}
  </CardStyle>
  )
}
