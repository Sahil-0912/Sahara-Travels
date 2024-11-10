import React, { useEffect } from 'react';
import upiicon from '../assets/images/upi-icon.png';
import csupport from '../assets/images/c-support.png';
import bus from '../assets/images/bus.png';
import feedback from '../assets/images/feedback.png'

import Aos from 'aos';
import 'aos/dist/aos.css'

const BusTickets = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <>
            <div className="container my-4" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-12 travelticket mb-4 mb-md-0 p-4">
                        <h1>NOW,<span>GET MORE</span> THAN <br /> <span>JUST BUS</span> TICKETS WITH <br /> Sahara TRAVELS!</h1>
                        <h5> Travel Ticket</h5>
                        <p className='text-secondary my-4'>Book IRCTC Train Tickets on redRail simple & superfast booking <br></br> process with no service fee + no payment gateway charge.</p>
                        <h6><img src={upiicon} alt="UPI Icon" /> Instant refunds on UPI payments</h6>
                        <h6><img src={csupport} /> Hassle- free customer support</h6>
                        <button className='btn btn-danger'>Book Your Tickets</button>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12 bus ">
                        <img src={bus} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BusTickets;
