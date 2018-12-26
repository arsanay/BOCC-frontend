import React, { Component } from "react";
class Introduce extends Component {
  render() {
    return (
      <div>
        <header className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-5">B O C C</h1>
            <h3 className="mb-5">
              <em>Bekasi Operational Control Center</em>
            </h3>
            {/* <div className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
              Find Out More
            </div> */}
          </div>
          <div className="overlay" />
        </header>
        <section className="content-section bg-light" id="about">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2>Control and Monitor What Is On Going at Witel Bekasi</h2>
                <p className="lead mb-5">
                  Concern about uncontrolled on going task? SAY NO MORE!
                </p>
                {/* <div
                  className="btn btn-dark btn-xl js-scroll-trigger"
                  href="#services"
                >
                  What We Do
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section
          className="content-section bg-primary text-white text-center"
          id="services"
        >
          <div className="container">
            <div className="content-section-heading">
              <h3 className="text-secondary mb-0">Freature</h3>
              <h2 className="mb-5">What is BOCC Serve to U</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-pencil" />
                </span>
                <h4>
                  <strong>MoM</strong>
                </h4>
                <p className="text-faded mb-0">Place to collect SR MoM</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-screen-smartphone" />
                </span>
                <h4>
                  <strong>Monitor</strong>
                </h4>
                <p className="text-faded mb-0">
                  Every sing on going tasks are monitored!
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-like" />
                </span>
                <h4>
                  <strong>Prognosis</strong>
                </h4>
                <p className="text-faded mb-0">Know What Our Target Ahead</p>
              </div>

              <div className="col-lg-3 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-mustache" />
                </span>
                <h4>
                  <strong>Documentation</strong>
                </h4>
                <p className="text-faded mb-0">
                  Share everything what we did! <i className="fas fa-heart" />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="portfolio">
          <div className="container">
            <div className="content-section-heading text-center">
              <h3 className="text-secondary mb-0">Documentation</h3>
              <h2 className="mb-5">Calendar of Events</h2>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="portfolio-item">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Upacara Bela Negara</h2>
                      <p className="mb-0">----!</p>
                    </span>
                  </span>
                  <img className="img-fluid" src="img/portfolio-1.jpg" alt="/" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-item">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Peringatan Hari Ibu</h2>
                      <p className="mb-0">----!</p>
                    </span>
                  </span>
                  <img className="img-fluid" src="img/portfolio-2.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-item">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Upacara Sumpah Pemuda</h2>
                      <p className="mb-0">----!</p>
                    </span>
                  </span>
                  <img className="img-fluid" src="img/portfolio-3.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-item">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Gowes Bareng</h2>
                      <p className="mb-0">----!</p>
                    </span>
                  </span>
                  <img className="img-fluid" src="img/portfolio-4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                <h3 className="section-subheading text-muted">
                  Witel Bekasi - War Room Division
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/MbakFara.jpg"
                    alt=""
                  />
                  <h4>Faradilla Karnesia</h4>
                  <p className="text-muted">Officer 2</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-twitter" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-facebook-f" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-linkedin-in" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/PakNurdin.jpg"
                    alt=""
                  />
                  <h4>Achmad Nurdin</h4>
                  <p className="text-muted">War Room Manager</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-twitter" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-facebook-f" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-linkedin-in" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/MbakCitra.jpg"
                    alt=""
                  />
                  <h4>Citra Octaviana</h4>
                  <p className="text-muted">Officer 2</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-twitter" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-facebook-f" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-linkedin-in" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/PakMuhajir.jpg"
                    alt=""
                  />
                  <h4>Muhajir</h4>
                  <p className="text-muted">Officer 1</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-twitter" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-facebook-f" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-linkedin-in" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/PakTroi.jpg"
                    alt=""
                  />
                  <h4>Troi Anderson</h4>
                  <p className="text-muted">Officer 1</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-twitter" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-facebook-f" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-linkedin-in" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/Asa1.jpg"
                    alt=""
                  />
                  <h4>Arsana Yudistira</h4>
                  <p className="text-muted">Full Stack Programmer - OJT GPTP 8</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-twitter" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-facebook-f" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div href="#">
                        <i className="fab fa-linkedin-in" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="contact" className="map">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/place/Telkom+Bekasi/@-6.2380124,106.9921099,17z/data=!3m1!4b1!4m5!3m4!1s0x2e698c3b4faf93a9:0xda3acf11e6151872!8m2!3d-6.2380124!4d106.9942986"
          />
          <br />
          <small>
            <div href="https://www.google.com/maps/place/Telkom+Bekasi/@-6.2380124,106.9921099,17z/data=!3m1!4b1!4m5!3m4!1s0x2e698c3b4faf93a9:0xda3acf11e6151872!8m2!3d-6.2380124!4d106.9942986" />
          </small>
        </section> */}
      </div>
    );
  }
}
export default Introduce;
