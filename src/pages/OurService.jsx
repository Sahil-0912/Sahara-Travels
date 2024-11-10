import React from 'react'
import OurServiceData from '../layouts/OurServiceData'
import OurServiceUi from '../layouts/OurServiceUi'

const OurService = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        OurServiceData.map((service) => {
                            return (
                                <>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <OurServiceUi img={service.img} title={service.title} para={service.para} button={service.button} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurService
