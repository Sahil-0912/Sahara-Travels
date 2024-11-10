import React, { useEffect } from 'react'
import InformationData from '../layouts/InformationData'
import InformationUi from '../layouts/InformationUi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Information = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
      }, [])
    return (
        <div>
            <div className="information text-center my-5" data-aos="fade-up">
                <h3>Information About Us</h3>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="card">
                                <i class="fa-solid fa-location-dot my-4"></i>
                                <div className="card-body">
                                    <h4>Location</h4>
                                    <h5>Narol,Ahmedabad</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="card">
                                <i class="fa-solid fa-envelope my-4"></i>
                                <div className="card-body">
                                    <h4>Email</h4>
                                    <h5>sufiyanshaikh8200@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="card">
                                <i class="fa-solid fa-phone my-4"></i>
                                <div className="card-body">
                                    <h4>Phone</h4>
                                    <h5>+91:8780943209</h5>
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-secondary my-4 fs-5'>user can Contact us through given details</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
