import React from 'react'
import { FaStar, FaUserPlus } from "react-icons/fa"
import { BiSolidPhone } from "react-icons/bi" 
import "./Usage.css"
const Usage = () => {
  return (
    <> 
       <div className="social-pack-box">
       <div className='usage-flex'>
         <div className="social-pack">
            <FaUserPlus className='usage-icon'/>
            <div className="pack-name">Social Pack</div>
            <div className="mbs-left">4424 <span>MB</span></div>
            <div className="remaining">remaining</div>
         </div>
         <div className="social-pack">
            <BiSolidPhone className='usage-icon'/>
            <div className="pack-name">Off-Net Mins</div>
            <div className="mbs-left">20 <span>MINS</span></div>
            <div className="remaining">remaining</div>
         </div>
         <div className="social-pack">
            <BiSolidPhone className='usage-icon'/>
            <div className="pack-name">On-Net Mins</div>
            <div className="mbs-left">276 <span>MINS</span></div>
            <div className="remaining">remaining</div>
         </div></div>
         <div className="subscription">
            Subscription Details:
         </div>
         <div className="monthly-whatsapp">
           <div className="month">
            Monthly Whatsapp
           </div>
           <div className="expiry ">
            Expires on 03-Sep-2023
           </div>
           <div className="pck-price">99PKR</div>
           <div className="recharge">Recharge Required</div>
           <div className="internet-data">
            Monthly Whatsapp Internet Data
           </div>
           <div className="use-mbs">2476/5120 MBs</div>
           <div className=" another-indicator"></div>
           <div className="used">48.59% Used</div>
           <div className="usage-btns">
            <button className="star-btn"><FaStar/></button>
            <button className="unsubscribe ">Unsubscribe</button>
            <button className="resubscribe">Re-subscribe</button>
           </div>
         </div>
         <div className="daily-reward ">
         <div className="month">
            Daily Rewards Bundle 40mb
           </div>
           <div className="expiry ">
            Expires on 21-Aug-2023
           </div>
           <div className="internet-data">
            Daily Rewards Bundle 40mb
           </div>
           <div className="another-indicator and"></div>
           <div className="used">80% Used</div>
           <div className="use-mbs">32/40 MBs</div>
           <div className="star-btn str"><FaStar/></div>
         </div>
         
       </div>
       <div className="loader"></div>
      
    </>
  )
}

export default Usage
