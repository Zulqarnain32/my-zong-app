import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"
import { GiSkullCrossedBones } from "react-icons/gi"
import "./FooterBundle.css"
const FooterBundle = () => {

    const [ confirmMsg,setConfirmMsg ] = useState(false)
    const [ afterConfirmMsg,setAfterConfirmMsg ] = useState(false)

    const handleSubscribeAfter = () => {
         setConfirmMsg(false)
         setAfterConfirmMsg(true)
    }
    const closepkg = () => {
        setConfirmMsg(false)
        setAfterConfirmMsg(false)
    }
    const handleAnotherPkg = () => {
       setConfirmMsg(true)
    }

    if(confirmMsg || afterConfirmMsg) {
        document.body.classList.add("sidebar-is-active")
    } else {
        document.body.classList.remove("sidebar-is-active")
    }

    return (
        <>
            <div className="footer-bundle">
                <div className="recharge-heading footer-head">
                    <div className="recharge-btns">Rs. 10 shop </div>
                    <div className="recharge-btns">Top Offers</div>
                    <div className="recharge-btns">All-In-One</div>
                    <div className="recharge-btns">Data</div>
                </div>
                <div className="all-cate">
                    <p>Monthly</p>
                    <p>Weekly</p>
                    <p>Daily</p>
                    <p>Filter By</p>
                </div>
                <div className="bundle-package">
                    <div className="new">New</div>
                    <div className="bottom"></div>
                    <div className="d-flex ano">
                        <div>
                            Daily Tiktok Offer
                            <p className='expire lefty'>1 day</p>

                        </div>
                        <div className='right'>
                            <p className='eight'>8PKR</p>
                            <p className='expire sm'>Incl Tax</p>
                        </div>
                    </div>
                    <div className="one-gb">
                        <p> 1<span className='expire'>GB</span></p>
                        <p className='expire'>Internet (Tiktok Only)</p>
                    </div>
                    <div className="bundle-btns">
                       <FaStar className='dd grw'/><button className="subscibe sb-package" onClick={handleAnotherPkg}>Suscrible Now</button>
                    </div>
                </div>
                <div className="bundle-package">
                    <div className="new gr">Popular</div>
                    <div className="bottom gr"></div>
                    <div className="d-flex ano">
                        <div>
                            1 Hour Youtube Offer
                            <p className='expire lefty'>1 day</p>

                        </div>
                        <div className='right'>
                            <p className='eight'>2.39PKR</p>
                            <p className='expire sm'>Incl Tax</p>
                        </div>
                    </div>
                    <div className="one-gb">
                        <p> 1<span className='expire'>GB</span></p>
                        <p className='expire'>Internet (Youtube Only)</p>
                    </div>
                    <div className="bundle-btns">
                       <FaStar className='dd '/><button className="subscibe sb-package" onClick={handleAnotherPkg}>Suscrible Now</button>
                    </div>
                </div>
                <div className="bundle-package">
                    <div className="new">New</div>
                    <div className="bottom"></div>
                    <div className="d-flex ano">
                        <div>
                            One Day Facebook
                            <p className='expire lefty'>1 day</p>

                        </div>
                        <div className='right'>
                            <p className='eight'>8PKR</p>
                            <p className='expire sm'>Incl Tax</p>
                        </div>
                    </div>
                    <div className="one-gb">
                        <p> 1<span className='expire'>GB</span></p>
                        <p className='expire'>Internet (Facebook Only)</p>
                    </div>
                    <div className="bundle-btns">
                       <FaStar className='dd grw'/><button className="subscibe sb-package" onClick={handleAnotherPkg}>Suscrible Now</button>
                    </div>
                </div>
                <div className="bundle-package">
                    <div className="new gr">Popular</div>
                    <div className="bottom gr"></div>
                    <div className="d-flex ano">
                        <div>
                            2 Hours Non Stop Offer
                            <p className='expire lefty'>2 Hour</p>

                        </div>
                        <div className='right'>
                            <p className='eight'>14PKR</p>
                            <p className='expire sm'>Incl Tax</p>
                        </div>
                    </div>
                    <div className="one-gb">
                        <p> Unlimited <span className='expire'>Zong Mins</span></p>
                    </div>
                    <div className="bundle-btns">
                       <FaStar className='dd '/><button className="subscibe sb-package" onClick={handleAnotherPkg}>Suscrible Now</button>
                    </div>
                </div>
                <div className="bundle-package">
                    <div className="new">New</div>
                    <div className="bottom"></div>
                    <div className="d-flex ano">
                        <div>
                            Daily Tiktok Offer
                            <p className='expire lefty'>1 day</p>

                        </div>
                        <div className='right'>
                            <p className='eight'>8PKR</p>
                            <p className='expire sm'>Incl Tax</p>
                        </div>
                    </div>
                    <div className="one-gb">
                        <p> 1<span className='expire'>GB</span></p>
                        <p className='expire'>Internet (Tiktok Only)</p>
                    </div>
                    <div className="bundle-btns">
                       <FaStar className='dd'/><button className="subscibe sb-package" onClick={handleAnotherPkg}>Suscrible Now</button>
                    </div>
                </div>
            </div>




            {/* ==================== confirm meseage ================  */}

            
  {confirmMsg && (
       <div className="congratulation-container congrats">
          <div className="confirm-image congrats">
            <img src="/assets/user.png" alt="" />
          </div>
          <div className="confirmation ">
             Confirmation
          </div>
          <p className="sure">Are you sure you want to subscribe this offer?</p>
         
          <div className="package-info">
            <div className="monthly-box">
              <div>
                <div>One Day Facebook</div>
                <div className='expire add'>1 Day</div>
              </div>
              <div className='right'>
                   <div className='parrot'>8PKR</div>
                   <div className='expire add'>Incl Tax</div>
              </div>
            </div>
            <div className='d-flex'>
            
              <div className="one-gb center">
                    <p> 1<span className='expire'>GB</span></p>
                    <p className='expire'>Internet (Facebook Only)</p>
              </div>
              
            </div>
          </div>
          <button className="subscribe-now" onClick={handleSubscribeAfter}>Subscribe Now</button>
          <div className="close-pkg" onClick={closepkg}>
          <GiSkullCrossedBones className='close-icon'/>
          </div>
       </div>
        )} 


        {/* ================ After Congratulations ================= */}
        
        
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

export default FooterBundle
