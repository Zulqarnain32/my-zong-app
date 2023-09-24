import React,{ useState } from 'react'
import { FaSearch,FaBell, FaUser } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { GiSkullCrossedBones } from "react-icons/gi"
import {  MdOutlineRefresh } from "react-icons/md"
import { Link } from 'react-router-dom'
const Navbarr = () => {

  const [ loader,setLoader ] = useState(false)
  // const [ sidebar,setSidebar ] = useState(false)
  const [ sidebar,setSidebar ] = useState(false)

  const handleLoader = () => {
    setLoader(true)
  }

  setInterval(() => {
     setLoader(false)
  }, 3000);

  const handleSidebar = () => {
     setSidebar(true)
  }
  
  const closeSidebar = () => {
    setSidebar(false)
  }
  if(sidebar){
    document.body.classList.add("sidebar-is-active")
  }
  else {
    document.body.classList.remove("sidebar-is-active")
  }

  return (
    <>
    
    {/* <div className={`${sidebar ? 'layer' : ''}`}> */}

    
      <div className="navbar-container">
        <div className="nav-sub-container">
            <div className="ring">
                <Link to = "/ring" className='search-link'><FaBell className='nav-icon'/></Link>
                
            </div>
            <div className="user-name">Hello, Buulk!</div>
            <div className="nav-three-icons">
                <Link to = "/search" className='search-link'><FaSearch className='nav-icon-search nav-icon'/></Link>
                <MdOutlineRefresh className='nav-icon-refresh nav-icon' onClick={handleLoader}/>  
                <GiHamburgerMenu className='nav-icon-burger nav-icon' onClick={handleSidebar}/>
            </div>
        </div>
      </div>
      {loader && (
        <div className="loader">
              <div className="pink"></div>
              <div className="green"></div>
        </div>
      )}
     {/* {sidebar && ( */}
          <div className={`side-bar-container ${sidebar ? 'sidebar-active' : 'side-bar-container'}`}>
        <div className="user-side">
          <div className="user-img">
            <img src="/assets/user.png" className='userimg'/>
          </div>
          <div className="user-name-side">
            Buulk <br /> UNKNOWN   
            <div className="ph">03184318298</div>
          </div>
        </div>
        <div className="side-bar-links">
        
          <ul>
            <li><FaUser className='sidebar-icon'/> My Profile</li><hr />
            <li><FaUser className='sidebar-icon'/> Manage Accounts</li><hr />
            <li><FaUser className='sidebar-icon'/>Change Language</li><hr />
            <li><FaUser className='sidebar-icon'/>Feedback</li><hr />
            <li><FaUser className='sidebar-icon'/>FAQs</li><hr />
            <li><FaUser className='sidebar-icon'/>Video Tutorials</li><hr />
            <li><FaUser className='sidebar-icon'/>Contact Us</li><hr />
            <li><FaUser className='sidebar-icon'/>Find Us</li><hr />
            <li><FaUser className='sidebar-icon'/>Press Release</li><hr />
            <li><FaUser className='sidebar-icon'/>Logout</li><hr />
            <li className='last-child'>Version 5.12.12.43</li><hr />
            
          </ul>
        </div>
        <div className="close-side-bar" onClick={closeSidebar}>
          <GiSkullCrossedBones/>
        </div>
      </div>
        {/* </div> */}
      
    </>
  )
}

export default Navbarr
