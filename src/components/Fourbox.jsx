import React from 'react'
import { MdOutlineSportsVolleyball } from "react-icons/md"
import { PiRadioFill,PiHandshakeDuotone } from "react-icons/pi"
import { FaMosque } from "react-icons/fa"
const Fourbox = () => {
  return (
    <>
      <div className="four-box">
         <div className="box">
            <div className="sub-box">
                <PiRadioFill/>
            </div>
            <div className="name enter">Entertainment</div>
         </div>
         <div className="box">
            <div className="sub-box">
              <MdOutlineSportsVolleyball/>
            </div>
            <div className="name ">Games</div>
         </div>
         <div className="box">
            <div className="sub-box">
              <PiHandshakeDuotone/>  
            </div>
            <div className="name ">Deals</div>
         </div>
         <div className="box">
            <div className="sub-box">
              <FaMosque/>
            </div>
            <div className="name ">Islam</div>
         </div>
         
      </div>
    </>
  )
}

export default Fourbox





// <MdOutlineSportsVolleyball/>
// <PiRadioFill/>
// <PiHandshakeDuotone/>
// <FaMosque/>