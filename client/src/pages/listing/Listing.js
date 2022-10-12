import './Listing.css';
import React from 'react';
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch';

export default function Listing() {
  const { id } = useParams();
  const dataUrl = 'http://localhost:3001/api';
  const { data, error, isPending } = useFetch(dataUrl);

  return (
    <div className="container">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="is-pending">Loading...</p>}
      {data && data.listings.map((listing) => {
        if (listing.id === id) {
          return (
            <div key={listing.id} className="single-listing">
              <figure className="banner">
                <img src={process.env.PUBLIC_URL + `/${listing.img}`} alt="" className="banner-image" />
              </figure>
              <div className="listing-info">
                <h2>{listing.title}</h2>
                <div className="line"></div>
                <p>{listing.description}</p>
                <div className="pills">
                  {listing.extras.map(extra => (
                    <span className="pill">{extra}</span>
                  ))}
                </div>
                <button className="btn btn-light">Request Information</button>
              </div>

            </div>
          )
          }
        })
      }
    </div>
  )
}
