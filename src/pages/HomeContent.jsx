import React, { useEffect } from 'react'
import twoway from '../assets/images/twoway.png'
import { GoArrowSwitch } from 'react-icons/go'

const HomeContent = () => {
  return (
    <>
      <section className="home-bg">
        <div className="container text-center">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-6">
              <h1 className="text-light">Book Your Bus Tickets Anytime, Anywhere!</h1>
              <p>Fast, reliable, and secure online bus <br />ticket booking platform.</p>
              <form class="s-form">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6">
                      <input type="text" class="form-control h-75 w-100 icon-input" placeholder="From" />
                      <div className="icon">
                        <GoArrowSwitch />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                      <input type="text" class="form-control  h-75" placeholder="To" />
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                      <input type="date" id="date" className='form-control' />
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 bus">
                      <button class="btn btn-outline-light h-100 mt-2 w-50">Search Buses</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContent
