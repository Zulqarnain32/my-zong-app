import React from 'react'
import "./Recharge.css"
const Recharge = () => {
  return (
    <>
    <div className="recharge-container">
      <div className="recharge-heading">
        <div className="recharge-btns">Online <br className='rrr'/> Recharge</div>
        <div className="recharge-btns">Advance Loan</div>
        <div className="recharge-btns">Scratch Card</div>
      </div>
      <input type="number" placeholder='03XX-XXXXXXX' className='phoneno re-input'/>
      <input type="number" placeholder='Enter Amount' className='amount re-input' />
      <div className="limit">Amount Limit 90 to 20000 PKR</div>
      <div className="quick-payment">
        Quick Payment
      </div>
      <div className="six-boxes">
        <div>PKR 100</div>
        <div>PKR 200</div>
        <div>PKR 500</div>
        <div>PKR 800</div>
        <div>PKR 1000</div>
        <div>PKR 2000</div>
      </div>
      <button className="select-payment">Select Payment Method</button>
      <img src="/assets/zong1.jpg" alt="" className='re-img'/>
    </div>
    <div className="loader"></div>
    </>
  )
}

export default Recharge
