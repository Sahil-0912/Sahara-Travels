import React from 'react'
import footerlogo from '../assets/images/LOGO 3.png'
const Footer = () => {
    return (
        <div>
            <footer className=''>
                <div className="container my-4">
                    <div className="row border-bottom">
                        <div className="col-xl-3 col-lg-4 col-md-6 my-4 p-4">
                            <img src={footerlogo} className='f-logo' />
                            <p className='text-light my-4'>SaharaBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and  Android mobile apps for all major routes.</p>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 my-4 p-4">
                            <h4>About Sahara Travels</h4>
                            <ul className=' text-light'>
                                <li>ABout us</li>
                                <li>Investor Relations</li>
                                <li>Contact us</li>
                                <li>Mobile version</li>
                                <li>Saharabus on mobile</li>
                                <li>Sitemap</li>
                                <li>Offers</li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 my-4 p-4">
                            <h4>Info</h4>
                            <ul className=' text-light'>
                                <li>T&C</li>
                                <li>Privacy policy</li>
                                <li>FAQ</li>
                                <li>Bus operator registration</li>
                                <li>Agent registration</li>
                                <li>Primo Bus</li>
                                <li>Bus Timetable</li>
                            </ul>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 my-4 p-4">
                            <h4>Head Office</h4>
                            <h4 className='text-light'>Ahmedabad - Sahara Travels, Shop no 3 kala estate narol circle Ahmedabad.( Gujarat ),  Mo:+918780943209 <br />Time: 9:30 to 6:30</ h4>
                            <div className="foot-input">
                                <div class="input-group mb-3 my-3">
                                    <input type="text" class="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2">Send</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icon text-end me-3 my-3">
                    <i class="fa-brands fa-facebook mx-2"></i>
                    <i class="fa-brands fa-instagram mx-2"></i>
                    <i class="fa-brands fa-twitter mx-2"></i>
                    <i class="fa-brands fa-linkedin mx-2"></i>
                    <p className='text-center'>@ 2024 Sahara Travels India Pvt.Ltd all Right Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
