import React, { useEffect } from 'react';
import review from '../assets/images/feedback.png'
import primo2 from '../assets/images/primo2.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Feedback = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <>
            <section className='feedback container' data-aos="fade-up">
                <img src={review} />
            </section>

            <section className='primo container border-bottom' data-aos="fade-up">
                <img src={primo2} />
            </section>

        </>

    );
}

export default Feedback;
