import React from 'react'
import { Link } from 'react-router-dom';

// styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand nav-link-slide">
                <h1>Luxury Listings</h1>
            </Link>
            <Link to="/create">Add a new listing</Link>
        </nav>
    </div>
  )
}
