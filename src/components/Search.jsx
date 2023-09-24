import React from 'react'
import { Link } from "react-router-dom"
import { FaCross, FaWhatsapp } from "react-icons/fa"
import "./Search.css"
const Search = () => {
  return (
    <>
      <div className="search-container">
          <div className="input">
            <input type="text" placeholder='Search for offers & services' />
            <div className="cancel"><Link to = "/home" className='all-links'>✖️</Link></div>
          </div>
      </div>
    </>
  )
}

export default Search
