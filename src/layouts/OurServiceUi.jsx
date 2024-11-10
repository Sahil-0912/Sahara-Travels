import React from 'react'

const OurServiceUi = (props) => {
    return (
        <div>
            <div className='our-service '>
                <div className="card shadow my-5 p-3 text-center">
                    <img src={props.img} className='mx-auto' />
                    <div className="card-body text-center">
                        <h4 className='text-center'>{props.title}</h4>
                        <p className='text-center text-secondary'>{props.para}</p>
                        <button className='btn btn-danger'>{props.button}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServiceUi
