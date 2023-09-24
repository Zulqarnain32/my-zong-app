import React, { useState } from 'react'
import { RiMessageFill } from "react-icons/ri"
import { BiSolidPhone } from "react-icons/bi" 
import { FaWifi } from "react-icons/fa"
import { GiSkullCrossedBones } from "react-icons/gi"
import Bundle from './Bundle'
import Fourbox from './Fourbox'
import Slider from './Slider'
import Images from './Images'
import Map from '../Map'
import { Link } from "react-router-dom"
const Home = () => {

  const [ confirmMsg,setConfirmMsg ] = useState(false)
  const [ afterConfirmMsg,afterSetConfirmMsg ] = useState(false)

  const handleSubscribe = () => {
    console.log("subs");
    setConfirmMsg(true)
  }

  const handleSubscribeAfter = () => {
    console.log("subs");
    setConfirmMsg(false)
    afterSetConfirmMsg(true)
  }
  
  const closepkg = () =>{
    setConfirmMsg(false)
    afterSetConfirmMsg(false)

  }
  if(confirmMsg || afterConfirmMsg){
    document.body.classList.add("sidebar-is-active")
  } else {
    document.body.classList.remove("sidebar-is-active")
  }
 
  return (
    <>
     <div className="current-pkr-container">
       <div className="pkr-sub-container">
        <div className="curr-money">
           <div className="user-phone">
             03184318298
           </div>
           <div className="user-balance">
            <h1 className='balance'>72.51 <span className='pkr'>PKR</span></h1>
           </div>
           <div className="expire">
             Expires on 4th Oct, 2023
           </div>
        </div>
        <div className="charge-and-loan">
          <button className="charge"><Link to = "/recharge" className='rech'>Recharge</Link></button><br />
          <button className="loan"><Link to = "/loan" className='thirty'>Get Rs. 30</Link></button>
        </div>
       </div>
     </div>

     <div className="offer-you-have">
     <Link to = "/usage" className = "all-links">
        <div className="mbs">
         <div className="offer-icon"> <FaWifi/></div>
         <div className="mbs-have">
          4456 <span className='mbb'>MB</span>
          </div>
          <div className="remaining">
            remaining
          </div>
          <div className="indicator"></div>
          <div className="offer-active">
            1 offer active
          </div> 
        </div>
        </Link>
        <Link className = "all-links" to = "/usage">
        <div className="mbs">
         <div className="offer-icon"> <BiSolidPhone/></div>
         <div className="mbs-have">
          674 <span className='mbb'>MINS</span>
          </div>
          <div className="remaining">
            remaining
          </div>
          <div className="indicator"></div>
          <div className="offer-active">
            3 offers active
          </div>
        </div>
        </Link>
        <Link className = "all-links" to = "/usage">
        <div className="mbs">
         <div className="offer-icon"> <RiMessageFill/></div>
         <div className="mbs-have">
          2000 <span className='mbb'>SMS</span>
          </div>
          <div className="remaining">
            remaining
          </div>
          <div className="indicator"></div>
          <div className="offer-active">
            1 offer active
          </div>
        </div>
        </Link>
      </div>
      <div className="loader"></div>
     


      <Bundle/>
      <Fourbox/>
      <Slider/>
       <Images/>



    <div className="package-parent-container">
      <div className="package-container">
        <div className="package-title">
            <div className="hot-offer">HOT OFFER</div>
            <div className="weekly">
                Weekly Super Star Offer
            </div>
        </div>
        <div className="offers">
            <div className="package-box">
               <FaWifi className='package-icon'/>
               <div className="gb">76GB</div>
               <div className="type">Data</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Off Net Mins</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Zong Mins</div>
            </div>
            <div className="package-box">
                <RiMessageFill className='package-icon'/>
                <div className="gb">7000</div>
                <div className="type">SMS</div>
            </div>
        </div>
        <div className="package-price">
            <div className="price">
              2000PKR <span>Recharge Required</span> 
            <div className="validity">
              Validity: <span>7 Days</span>
            </div>
            </div>
            <div className="subscribe">
              <button className="sb-package" onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
      </div>
      <div className="package-container">
        <div className="package-title">
            <div className="hot-offer">NEW OFFER</div>
            <div className="weekly">
                Monthly Pro Max
            </div>
        </div>
        <div className="offers">
            <div className="package-box">
               <FaWifi className='package-icon'/>
               <div className="gb">76GB</div>
               <div className="type">Data</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Off Net Mins</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Zong Mins</div>
            </div>
            <div className="package-box">
                <RiMessageFill className='package-icon'/>
                <div className="gb">7000</div>
                <div className="type">SMS</div>
            </div>
        </div>
        <div className="package-price">
            <div className="price">
              2000PKR <span>Recharge Required</span> 
            <div className="validity">
              Validity: <span>30 Days</span>
            </div>
            </div>
            <div className="subscribe">
              <button className="sb-package" onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
      </div>
      <div className="package-container">
        <div className="package-title">
            <div className="hot-offer">FLASH SALE</div>
            <div className="weekly">
                Monthly Digital Max
            </div>
        </div>
        <div className="offers">
            <div className="package-box">
               <FaWifi className='package-icon'/>
               <div className="gb">76GB</div>
               <div className="type">Data</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Off Net Mins</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Zong Mins</div>
            </div>
            <div className="package-box">
                <RiMessageFill className='package-icon'/>
                <div className="gb">7000</div>
                <div className="type">SMS</div>
            </div>
        </div>
        <div className="package-price">
            <div className="price">
              2000PKR <span>Recharge Required</span> 
            <div className="validity">
              Validity: <span>30 Days</span>
            </div>
            </div>
            <div className="subscribe">
              <button className="sb-package" onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
      </div>
      <div className="package-container">
        <div className="package-title">
            <div className="hot-offer">HOT OFFER</div>
            <div className="weekly">
                Weekly Super Star Offer
            </div>
        </div>
        <div className="offers">
            <div className="package-box">
               <FaWifi className='package-icon'/>
               <div className="gb">76GB</div>
               <div className="type">Data</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Off Net Mins</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Zong Mins</div>
            </div>
            <div className="package-box">
                <RiMessageFill className='package-icon'/>
                <div className="gb">7000</div>
                <div className="type">SMS</div>
            </div>
        </div>
        <div className="package-price">
            <div className="price">
              450PKR <span>Recharge Required</span> 
            <div className="validity">
              Validity: <span>7 Days</span>
            </div>
            </div>
            <div className="subscribe">
              <button className="sb-package" onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
      </div>
      <div className="package-container">
        <div className="package-title">
            <div className="hot-offer">HOT OFFER</div>
            <div className="weekly">
                Weekly Pro Max
            </div>
        </div>
        <div className="offers">
            <div className="package-box">
               <FaWifi className='package-icon'/>
               <div className="gb">76GB</div>
               <div className="type">Data</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Off Net Mins</div>
            </div>
            <div className="package-box">
                <BiSolidPhone className='package-icon'/>
                <div className="gb">1000</div>
                <div className="type">Zong Mins</div>
            </div>
            <div className="package-box">
                <RiMessageFill className='package-icon'/>
                <div className="gb">7000</div>
                <div className="type">SMS</div>
            </div>
        </div>
        <div className="package-price">
            <div className="price">
              300PKR <span>Recharge Required</span> 
            <div className="validity">
              Validity: <span>7 Days</span>
            </div>
            </div>
            <div className="subscribe">
              <button className="sb-package" onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
      </div>
      </div>
   










       <Map/>

  {confirmMsg && (
       <div className="congratulation-container">
          <div className="confirm-image">
            <img src="/assets/user.png" alt="" />
          </div>
          <div className="confirmation">
             Confirmation
          </div>
          <p className="sure">Are you sure you want to subscribe this offer?</p>
         
          <div className="package-info">
            <div className="monthly-box">
              <div>
                <div>Monthly Pro Max</div>
                <div className='expire add'>30 Days</div>
              </div>
              <div className='right'>
                   <div className='parrot'>2000PKR</div>
                   <div className='expire add'>Recharge Required</div>
              </div>
            </div>
            <div className='d-flex'>
              <div>
                200GB
                <p className="expire add">Internet</p>
              </div>
              <div>
                2000GB
                <p className="expire add">Off-Net Mins</p>
              </div>
              <div>
                20000GB
                <p className="expire add">SMS</p>
              </div>
              <div>
                20000GB
                <p className="expire add">Zong Mins</p>
              </div>
            </div>
          </div>
          <button className="subscribe-now" onClick={handleSubscribeAfter}>Subscribe Now</button>
          <div className="close-pkg" onClick={closepkg}>
          <GiSkullCrossedBones className='close-icon'/>
          </div>
       </div>
        )} 


         {afterConfirmMsg && (
        <div className="after-subs-container">
           <div className="af-user">
            <img src="/assets/user.png" alt="" srcset="" />
           </div>
           <div className="confirmation">
             Confirmation
          </div>
          <p className="sure">Your request has been successfully submitted.
          A confirmation SMS will be received shortly</p>
          <div className="close-pkg" onClick={closepkg}>
            <GiSkullCrossedBones className='close-icon'/>
          </div>
        </div>
        )}
    </>
  )
}

export default Home
