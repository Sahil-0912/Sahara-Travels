import React from 'react'

const InformationUi = (props) => {
    return (
        <div>
            <div className=''>
            <i class={props.icon}></i>
                <div className="card shadow my-5 p-3 text-center">
                    <div className="card-body text-center">
                        <h4 className='text-center'>{props.title}</h4>
                        <p className='text-center text-secondary'>{props.para}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationUi
