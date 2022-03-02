import React from 'react'

export default function Comman(props) {
  return (
    <div>
        <section id="header" className='d-flex align-items-center'>
          <div className="container-fluid nav-bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1> {props.head1} <strong className='brand-name'>{props.head2}</strong></h1>
                    <h2 className='my-3'>
                      We are the team of talented developer making websites
                     </h2>
                    <div className="mt-3">
                    <button type="button" class="btn btn-primary btn-lg">Get Started</button>
                    </div>
                  </div>
           

            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img className='img-fluid animated' src={props.imglink} alt="home img" />
            </div>
            </div>
            </div>
            </div>
          </div>
        </section>
    </div>
  )
}
