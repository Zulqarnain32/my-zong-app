import React from 'react'

import {  HiHome } from "react-icons/hi"
import {  GrBundle } from "react-icons/gr"
import {  MdDataUsage } from "react-icons/md"
import {  AiOutlineAppstore } from "react-icons/ai"
import {  TbBoxMultiple } from "react-icons/tb"
import { Link } from "react-router-dom"
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Link to = "/home" className='all-links black'>
        <div className="footer-icons">
            <div className="home">
              <HiHome className='f-icon'/>
              <div className="footer-icon-name">
                Home
              </div>
            </div>
        </div>
        </Link>
        <Link to = "/usage" className='all-links black'>
        <div className="footer-icons">
            <div className="home">
              <MdDataUsage className='f-icon'/>
              <div className="footer-icon-name">
                Usage
              </div>
            </div>
        </div>
        </Link>
        <Link to = "/bundle" className='all-links black'>
        <div className="footer-icons">
            <div className="home">
              <GrBundle className='f-icon'/>
              <div className="footer-icon-name">
                Bundles
              </div>
            </div>
        </div>
        </Link>
        <Link to="/zplay" className='all-links black'>
        <div className="footer-icons">
            <div className="home">
              <TbBoxMultiple className='f-icon'/>
              <div className="footer-icon-name">
                Z Play
              </div>
            </div>
        </div>
        </Link>
        <Link to = "/more" className='all-links black'>
        <div className="footer-icons">
            <div className="home">
              <AiOutlineAppstore className='f-icon'/>
              <div className="footer-icon-name">
                More
              </div>
            </div>
        </div>
        </Link>

        
      </div>
    </>
  )
}

export default Footer
