import React from 'react';

function About() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h2 className="display-3 text-white mb-3 animated slideInDown">ABOUT US</h2>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit Lorem ipsum dolor sit, amet consecfugit cum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative h-100">
                <img className="img-fluid position-absolute w-100 h-100" src="" alt="" style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">siya tech</span>
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a className="btn btn-primary py-3 px-5 mt-2" href="/">Read More</a>
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
    </div>
  );
}

export default About;
