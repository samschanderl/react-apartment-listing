import React from 'react'
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


// styles
import './Listing.css'

export default function Listing({listing}) {
  return (
    <div className="listing-wrapper">
      <p className="pricing-tag">{listing.price}</p>
      <div className="filters">
      <div className="listing-card">
        <figure>
            <img src={listing.img}/>
        </figure>
        <div className="description">
            <h2>{listing.title}</h2>
            <span className="line"></span>
            <p className="italic">{listing.description}</p>
            <p>Number of bedrooms: {listing.bedrooms}</p>
            <div className="pills">{listing.extras.map(item => (
                <span key={item} className="pill">{item}</span>
            ))}
            </div>


        </div>
      </div>
      </div>
    </div>


  )
}
