import React from 'react'
import { BsFillGiftFill } from "react-icons/bs"
import { ImVimeo } from "react-icons/im"
import "./Bundle.css"
const Bundle = () => {
  return (
    <>
      <div className="bundle-container">
        <div className="make-bundle">
            <div className="bundle">
                Make Your Own Bundle
            </div>
            <div className="bundle-icon">
              <BsFillGiftFill/>
            </div>
        </div>
        <div className="my-zong ">
            <div className="bundle">
                My Zong 
            </div>
            <div className="bundle-icon">
              <ImVimeo/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Bundle
