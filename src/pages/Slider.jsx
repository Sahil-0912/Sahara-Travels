import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import kanpur from '../assets/images/kanpurr.jpg'
import Mumbai from '../assets/images/Mumbai.jpg'
import delhi from '../assets/images/delhiii.jpg'
import dwarka from '../assets/images/dwarkaa.jpg'
import jaipur from '../assets/images/jaipurr.jpg'
import aurangabad from '../assets/images/aurangabad.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'



const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <>
      <div className="top" data-aos="fade-up">
        <h4 className='text-center my-5 fs-1'>Top Services</h4>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="swiper" data-aos="fade-up">
          <SwiperSlide className='kanpur'>
            <div className="container city">
              {/* <div className="card  p-3"> */}
              <img src={kanpur} />
              <div className="slider-txt">
                <ul className='text-start list-unstyled'>
                  <li>Bording Point : 7:00 AM</li>
                  <li>Droping Point : 2:00 PM</li>
                  <li>Time Duration : 24</li>
                  <li>Price : 800</li>
                </ul>
              </div>
              <div className="card-body text-center">
                <h4 className='text-center'>Ahmedabad To Kanpur</h4>
                <button className='btn btn-outline-danger mb-3'>Book Now</button>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide className='Mumbai'>
            <div className="container city">
              {/* <div className="card  p-3"> */}
              <img src={Mumbai} />
              <div className="slider-txt">
                <ul className='text-start list-unstyled'>
                  <li>Bording Point : 7:00 AM</li>
                  <li>Droping Point : 2:00 PM</li>
                  <li>Time Duration : 24</li>
                  <li>Price :800</li>
                </ul>
              </div>
              <div className="card-body text-center">
                <h4 className='text-center'>Ahmedabad To Mumbai</h4>
                <button className='btn btn-outline-danger mb-3'>Book Now</button>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            <div className="container city">
              {/* <div className="card  p-3"> */}
              <img src={delhi} />
              <div className="slider-txt">
                <ul className='text-start list-unstyled'>
                  <li>Bording Point : 7:00 AM</li>
                  <li>Droping Point : 2:00 PM</li>
                  <li>Time Duration : 24</li>
                  <li>Price : 800</li>
                </ul>
              </div>
              <div className="slider-txt">
                <ul className='text-start list-unstyled'>
                  <li>Bording Point : 7:00 AM</li>
                  <li>Droping Point : 2:00 PM</li>
                  <li>Time Duration : 24</li>
                  <li>Price : 800</li>
                </ul>
              </div>
              <div className="card-body text-center delhi position-relative">
                <h4 className='text-center '>Ahmedabad To Delhi</h4>
                <button className='btn btn-outline-danger mb-3'>Book Now</button>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide className='kanpur'>
            <div className="container city">
              {/* <div className="card  p-3"> */}
              <img src={jaipur} />
              <div className="slider-txt">
                <ul className='text-start list-unstyled'>
                  <li>Bording Point : 7:00 AM</li>
                  <li>Droping Point : 2:00 PM</li>
                  <li>Time Duration : 24</li>
                  <li>Price : 800</li>
                </ul>
              </div>
              <div className="card-body text-center">
                <h4 className='text-center'>Ahmedabad To Jaipur</h4>
                <button className='btn btn-outline-danger mb-3'>Book Now</button>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="container city">
              {/* <div className="card  p-3"> */}
              <img src={dwarka} />
              <div className="slider-txt">
                <ul className='text-start list-unstyled'>
                  <li>Bording Point : 7:00 AM</li>
                  <li>Droping Point :  2:00 PM</li>
                  <li>Time Duration : 24</li>
                  <li>Price : 800</li>
                </ul>
              </div>
              <div className="card-body text-center">
                <h4 className='text-center'>Ahmedabad To Dwarka</h4>
                <button className='btn btn-outline-danger mb-3'>Book Now</button>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="container city">
              {/* <div className="card  p-3"> */}
              <img src={aurangabad} />
              <div className="slider-txt">
                <ul className='text-start list-unstyled'>
                  <li>Bording Point : 7:00 AM</li>
                  <li>Droping Point : 2:00 PM</li>
                  <li>Time Duration : 24</li>
                  <li>Price : 800</li>
                </ul>
              </div>
              <div className=" text-center">
                <h4 className='text-center'>Ahmedabad To Aurangabad</h4>
                <button className='btn btn-outline-danger mb-3'>Book Now</button>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
