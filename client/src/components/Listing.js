import React from 'react'
import { Link, useHistory } from 'react-router-dom';


// styles
import './Listing.css'

export default function Listing({listing}) {

  const history = useHistory()

  const openListing = (listingId) => {
    history.push(`/listings/${listingId}`)
  }

  return (
    <div className="listing-wrapper" onClick={() => {openListing(listing.id)}}>
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
