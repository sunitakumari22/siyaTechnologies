import React from 'react'
import first from './../assets/first.jpeg'
import second from './../assets/second.jpeg'


function Dashboard() {
  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h2 className="display-3 text-white mb-3 animated slideInDown">computer institute</h2>
              <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet
                diam et eos erat ipsum lorem sit Lorem ipsum dolor si fugit cum.</p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text"
                  placeholder="search" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">TEACHERS</h6>
            <h1 className="mb-5">Meet OUR Guide</h1>
          </div>
          <div className="row g-4">
            {[
              { name: "M.KARTIK", img: "img/team-1.jpg" },
              { name: "RINU SINGH", img: "img/team-2.jpg" },
              { name: "PRITEEK MISHRA", img: "img/team-3.jpg" },
              { name: "DIVYA", img: "img/team-4.jpg" },
            ].map((teacher, index) => (
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={teacher.name}>
                <div className="team-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={teacher.img} alt={teacher.name} />
                  </div>
                  <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">{teacher.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
            <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <h5>C/C++</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <h5>JAVA</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">

                        <h5>PYTHON</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">

                        <h5>VB.NET</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">

                        <h5>HTML/CSS/JS</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <h5>ANGULAR</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">

                        <h5>REACT JS</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <h5>NETWORKING</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
      





    </>
  )
}

export default Dashboard
