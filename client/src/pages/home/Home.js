import React from 'react';
import { useFetch } from '../../hook/useFetch';
import Listing from '../../components/Listing'

import './Home.css';

export default function Home() {
  const dataUrl = 'http://localhost:3001/api';
  const { data, isPending, error } = useFetch(dataUrl);

  return (
    <div className="home">
      <h1>Find Your Perfect Home</h1>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.map(listing => (
        <Listing key={listing.id} listing={listing}/>
      ))}
    </div>
  )
}
