import React, { useEffect } from 'react'
import bus from '../assets/images/bus.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const OurMissionVission = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
      }, [])
    return (
        <div>
            <section>
                <div className="container"  data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-12  mb-4 mb-md-0 mt-5">
                            <div className="mission">
                                <h3>Our Mission</h3>
                                <p className='text-secondary'>Our mission is to simplify bus travel for everyone, offering a user-friendly platform for secure
                                    bookings and real-time tracking. We aim to make bus travel more accessible and stress-free by
                                    connecting travelers with a vast network of trusted bus operators.</p>
                            </div>
                            <div className="mission">
                                <h3>Our Vision</h3>
                                <p className='text-secondary'>We envision a world where bus travel is the preferred mode of transportation for millions, providing
                                    a reliable, eco-friendly, and cost-effective way to travel. We strive to continuously innovate and
                                    enhance the customer experience with technology and a customer-first approach.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12 bus-vision">
                            <img src={bus} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='ready text-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-6">
                            <h2 className='text-center text-light'>Ready to Book Your Ticket?</h2>
                            <p className='text-center text-light'>Join thousands of satisfied customers who trust us for their bus travel needs. Book your next trip now!</p>
                            <button className='btn btn-light'>Book Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurMissionVission
