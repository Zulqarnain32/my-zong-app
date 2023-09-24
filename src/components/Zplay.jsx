// import React from 'react'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./Zolay.css"

// import './App.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const Zplay = () => {
  return (
    <>
      <div className="six-sm-box">
        <div className="z-box">
          <div className="z-sb-box">
            <div className="green-line"></div>
          </div>
          Entertainment
        </div>
        <div className="z-box">
          <div className="z-sb-box">
            <div className="green-line"></div>
          </div>
          Games
        </div>
        <div className="z-box">
          <div className="z-sb-box">
            <div className="green-line"></div>
          </div>
          Deals
        </div>
        <div className="z-box">
          <div className="z-sb-box">
            <div className="green-line"></div>
          </div>
          Islam
        </div>

        <div className="z-box">
          <div className="z-sb-box">
            <div className="green-line"></div>
          </div>
          Sports
        </div>

      </div>

      <div className="zplay-slider">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/assets/zong15.jpg" className='zplay-img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/zong16.jpg" className='zplay-img' />

          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/zong17.jpg" className='zplay-img' />

          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/zong18.jpg" className='zplay-img' />

          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/zong5.jpg" className='zplay-img' />

          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/zong11.jpg" alt="" className='zplay-img'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src="assets/zong12.jpg" alt="" className='zplay-img'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src="assets/zong13.jpg" alt="" className='zplay-img'/>
          </SwiperSlide>
          <SwiperSlide> 
          <img src="assets/zong14.jpg" alt="" className='zplay-img'/>
          </SwiperSlide>
        </Swiper>
        <div className="recently-added">
          <div className="z-line">
            <div></div> <span className='grayline'> Recently Added</span>
          </div>
          <div className="z-line">
            <div></div><span className='grayline'>Trending</span>
          </div>
          <div className="z-line">
            <div></div><span className='grayline'>Top Five</span>
          </div>

        </div>
      </div>


      <div className="z-games">
        <div className="title">Games</div>
        <div className="sub-title">Gago Instant Games</div>
        <div className="z-carousel">
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/sport.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>Word Games</p>
            <p className='expire'>Play Now!</p>
           </div>
          </div>
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/board.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>Board Games</p>
            <p className='expire'>Play Now!</p>
           </div>
          </div>
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/tabletop.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>Tabletop Games</p>
            <p className='expire'>Play Now!</p>
           </div>
          </div>
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/racing.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>Racing Games</p>
            <p className='expire'>Play Now!</p>
           </div>
          </div>
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/sport.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>Sport  Games</p>
            <p className='expire'>Play Now!</p>
           </div>
          </div>
        </div>
      </div>




      <div className="z-games">
        <div className="title">Deals</div>
        <div className="sub-title">Golootlo Discounts</div>
        <div className="z-carousel">
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/pizza1.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>14th Street Pizza</p>
            <p className='expire'>9 for 9 deal</p>
           </div>
          </div>
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/burger3.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>Burger Lab</p>
            <p className='expire'>Spicy Crispy Burger</p>
           </div>
          </div>
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/pizza2.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>Califormia Pizza</p>
            <p className='expire'>But 1 Get 1 Free</p>
           </div>
          </div>
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/burger4.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>KFC</p>
            <p className='expire'>But 1 Get 1 Free</p>
           </div>
          </div>
          <div className='z-box-sb' >
           <div className='img'>
            <img src="/assets/burger5.jpg" alt="" className='cir-img' />
           </div>
           <div className='cont'>
            <p className='word'>McDonald's</p>
            <p className='expire'>Hot in Crispy Burger</p>
           </div>
          </div>
        </div>
      </div>



      <div className="z-games">
        <div className="title">
          Sports
        </div>
        <div className="sub-title">
          Cricket Live Score
        </div>
        <div className="zimg">
          <img src="/assets/sports.jpg" alt="" className='babar' />
        </div>
      </div>

      
      <div className="z-games">
        <div className="title">
          Islam
        </div>
        <div className="sub-title">
          Islamic Services
        </div>
        <div className="zimg">
          <img src="/assets/islamic.jpg" alt="" className='babar' />
        </div>
      </div>

      
      <div className="z-games">
        <div className="title">
          Infotainment
        </div>
        <div className="sub-title">
          Daily News, Weather & more!
        </div>
        <div className="zimg">
          <img src="/assets/infotainment.jpg" alt="" className='babar' />
        </div>
      </div>



    </>
  )
}

export default Zplay
