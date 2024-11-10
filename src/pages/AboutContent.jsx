import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const AboutContent = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
      }, [])
    return (
        <div>
            <div className="about-con text-center" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-6">
                            <h2 className='my-2'>Who We Are</h2>
                            <p className='text-secondary my-3'>We are a team of dedicated professionals committed to revolutionizing the way people travel by bus. Our
                                mission is to provide a <br></br> seamless, reliable, and easy-to-use online bus ticket booking platform that
                                connects travelers with bus operators across the country. <br></br> We strive to make bus travel convenient,
                                affordable, and enjoyable for all.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
