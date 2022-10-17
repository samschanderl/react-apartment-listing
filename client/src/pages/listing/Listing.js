import './Listing.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch';
import Modal from '../../components/Modal'

export default function Listing() {
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();
  const dataUrl = 'https://react-apartment-listing.herokuapp.com/api';
  const { data, error, isPending } = useFetch(dataUrl);

  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <div className="container">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="is-pending">Loading...</p>}
      {data && data.map((listing) => {
        if (listing.id === id) {
          return (
            <div key={listing.id} className="single-listing">
              <figure className="banner">
                <img src={process.env.PUBLIC_URL + `/${listing.img}`} alt="" className="banner-image" />
              </figure>
              <div className="listing-info">
                {listing.rareFind &&  <p className="rare-find italic">Rare find!</p>}
  
                
                <h1>{listing.title}</h1>
                <div className="line"></div>
                <p>{listing.description}</p>
                <h3>Extras</h3>
                <div className="line"></div>
                <div className="pills">
                  {listing.extras.map(extra => (
                    <span className="pill">{extra}</span>
                  ))}
                </div>
                <button className="btn btn-light" onClick={ e => setOpenModal(true)}>Request Information</button>
              </div>

            {openModal && <Modal title={listing.title} closeModal={closeModal}/>}
            </div>
          )
          }
        })
      }
    </div>
  )
}
