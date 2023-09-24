import React from 'react'
import "./Loan.css"
import { FaBitcoin, FaCoins, FaWhatsapp } from "react-icons/fa"
const Loan = () => {
  return (
    <>
      <div className="loan-container">
        <div className="recharge-heading">
          <div className="recharge-btns">Online <br className='rrr'/> Recharge</div>
          <div className="recharge-btns">Advance Loan</div>
          <div className="recharge-btns">Scratch Card</div>
        </div>  
      
      <div className="bronze-status-container">
        <div className="bronxe-img">
          <img src="/assets/bronze.png" className='br-img' />
        </div>
        <div className="bronze-content">
           <div className="status">
            Your Status: <span>Bronze</span>
           </div>
           <p>Recharge and spend more to upgrade your level silver for Rs. 60 loan</p>
        </div>
       </div>
       <div className="loan-btns">
         <div className="available-loan">
           <div className="avail">
            Loan Available
           </div>
           <div className="detail">
            View Detail
           </div>
           <div className="loan-price">
            RS. 30
           </div>
         </div>
         <div className="return-loan">
         <div className="avail">
            Loan In Return
           </div>
           <div className="detail">
            View Detail
           </div>
           <div className="loan-price">
            RS. 40
           </div>
         </div>
       </div>

       <div className="loan-types">
         <div className="double-loan">
             <div className="head-doulble">
              <div>Double Loan</div>
                <div><FaBitcoin className='bitcoin'/><FaBitcoin className='bitcoin'/></div>
             </div>
             <div className="loan-amount">
              <div>Loan Amount</div>
              <div>30 PKR</div>
             </div>
             <div className="service-fee">
              <div>Service Fee</div>
              <div>10.76 PKR incl tax</div>
             </div>
             <div className="service-fee">
              <div>Total Payable amount on recharge</div>
              <div>40.76 PKR incl tax</div>
             </div>
             <div className="detucted">
              This abount will be detucted from your next recharge.
             </div>
             <button className="avail-loan">Avail Loan</button>
         </div>
         <div className="double-loan single-loan">
             <div className="head-doulble">
              <div>Single Loan</div>
                <div><FaBitcoin className='bitcoin'/></div>
             </div>
             <div className="loan-amount">
              <div>Loan Amount</div>
              <div>15 PKR</div>
             </div>
             <div className="service-fee">
              <div>Service Fee</div>
              <div>5.36 PKR incl tax</div>
             </div>
             <div className="service-fee">
              <div>Total Payable amount on recharge</div>
              <div>20.46 PKR incl tax</div>
             </div>
             <div className="detucted">
              This abount will be detucted from your next recharge.
             </div>
             <button className="avail-loan">Avail Loan</button>
         </div>
       </div>
      </div> 
    </>
  )
}

export default Loan
