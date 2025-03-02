import React from 'react';

function Contact() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h2 className="display-3 text-white mb-3 animated slideInDown">Contact</h2>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit Lorem ipsum dolor sit, amet consecfugit cum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>Get In Touch</h5>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos
              </p>

              {/* Office Info */}
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="fa fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Office</h5>
                  <p className="mb-0">Ranchi Jharkhand</p>
                </div>
              </div>

              {/* Mobile Info */}
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">+012 345 67890</p>
                </div>
              </div>

              {/* Email Info */}
              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">siyatech@example.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '100px' }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
