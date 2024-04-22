export const BookingUser = () => {
  return (
    <>
      <div className="preloader">
        <div className="loader-ripple">
          <div></div>
          <div></div>
        </div>
      </div>

      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrapper">
              <div className="header-top-left">
                <div className="header-top-contact">
                  <ul>
                    <li>
                      <a href="https://live.themewild.com/cdn-cgi/l/email-protection#0f666169604f6a776e627f636a216c6062">
                        <i className="far fa-envelopes"></i>
                        <span
                          className="__cf_email__"
                          data-cfemail="dab3b4bcb59abfa2bbb7aab6bff4b9b5b7"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+21236547898">
                        <i className="far fa-phone-volume"></i> +2 123 654 7898
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-alarm-clock"></i> Sun - Fri (08AM -
                        10PM)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-top-right">
                <div className="header-top-link">
                  <a href="#">
                    <i className="far fa-arrow-right-to-bracket"></i> Login
                  </a>
                  <a href="#">
                    <i className="far fa-user-vneck"></i> Register
                  </a>
                </div>
                <div className="header-top-social">
                  <span>Follow Us: </span>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navigation">
          <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
              <a className="navbar-brand" href="index-2.html">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </a>
              <div className="mobile-menu-right">
                <div className="search-btn">
                  <button type="button" className="nav-right-link">
                    <i className="far fa-search"></i>
                  </button>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-mobile-icon">
                    <i className="far fa-bars"></i>
                  </span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <a className="dropdown-item" href="index-2.html">
                          Home Page 01
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index-3.html">
                          Home Page 02
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index-4.html">
                          Home Page 03
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Taxi
                    </a>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <a className="dropdown-item" href="taxi.html">
                          Taxi
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="taxi-single.html">
                          Taxi Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Service
                    </a>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <a className="dropdown-item" href="service.html">
                          Service
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="service-single.html">
                          Service Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <a className="dropdown-item" href="about.html">
                          About Us
                        </a>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          My Account
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="dashboard.html">
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="profile.html">
                              My Profile
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="profile-booking.html"
                            >
                              My Booking
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="profile-cancel-booking.html"
                            >
                              Cancel Booking
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="profile-payment.html"
                            >
                              Payment History
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="profile-setting.html"
                            >
                              Settings
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Authentication
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="login.html">
                              Login
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="register.html">
                              Register
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="forgot-password.html"
                            >
                              Forgot Password
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Driver
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="driver.html">
                              Driver
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="driver-single.html"
                            >
                              Driver Single
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="team.html">
                          Our Team
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="book-ride.html">
                          Book A Ride
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="taxi-rate.html">
                          Our Taxi Rate
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="faq.html">
                          Faq
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="testimonial.html">
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="404.html">
                          404 Error
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="coming-soon.html">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="terms.html">
                          Terms Of Service
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="privacy.html">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <a className="dropdown-item" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-single.html">
                          Blog Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="nav-right">
                  <div className="search-btn">
                    <button type="button" className="nav-right-link">
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                  <div className="nav-right-btn mt-2">
                    <a href="#" className="theme-btn">
                      <span className="fas fa-taxi"></span>Book A Taxi
                    </a>
                  </div>
                  <div className="sidebar-btn">
                    <button type="button" className="nav-right-link">
                      <i className="far fa-bars-filter"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="search-area">
                <form action="#">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type Keyword..."
                    />
                    <button type="submit" className="search-icon-btn">
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="sidebar-popup">
        <div className="sidebar-wrapper">
          <div className="sidebar-content">
            <button type="button" className="close-sidebar-popup">
              <i className="far fa-xmark"></i>
            </button>
            <div className="sidebar-logo">
              <img src="assets/img/logo/logo.png" alt="logo" />
            </div>
            <div className="sidebar-about">
              <h4>About Us</h4>
              <p>
                There are many variations of passages available sure there
                majority have suffered alteration in some form by injected
                humour or randomised words which do not look even slightly
                believable.
              </p>
            </div>
            <div className="sidebar-contact">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <h6>Email</h6>
                  <a href="https://live.themewild.com/cdn-cgi/l/email-protection#4e272028210e2b362f233e222b602d2123">
                    <i className="far fa-envelope"></i>
                    <span
                      className="__cf_email__"
                      data-cfemail="224b4c444d62475a434f524e470c414d4f"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </li>
                <li>
                  <h6>Phone</h6>
                  <a href="tel:+21236547898">
                    <i className="far fa-phone"></i>+2 123 654 7898
                  </a>
                </li>
                <li>
                  <h6>Address</h6>
                  <a href="#">
                    <i className="far fa-location-dot"></i>25/B Milford Road,
                    New York
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-social">
              <h4>Follow Us</h4>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <div
          className="site-breadcrumb"
          style="background: url(assets/img/breadcrumb/01.jpg)"
        >
          <div className="container">
            <h2 className="breadcrumb-title">Book A Ride</h2>
            <ul className="breadcrumb-menu">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li className="active">Book A Ride</li>
            </ul>
          </div>
        </div>

        <div className="book-ride py-120">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="booking-form">
                  <div className="book-ride-head">
                    <h4 className="booking-title">Make Your Booking Today</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using is that it has
                      distribution of letters to using content here making it
                      look like readable.
                    </p>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                          <i className="far fa-user"></i>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Phone"
                          />
                          <i className="far fa-phone"></i>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Email"
                          />
                          <i className="far fa-envelope"></i>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Pick Up Location</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type Location"
                          />
                          <i className="far fa-location-dot"></i>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Drop Off Location</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type Location"
                          />
                          <i className="far fa-location-dot"></i>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Passengers</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Passengers"
                          />
                          <i className="far fa-user-tie"></i>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Cab Type</label>
                          <select className="select">
                            <option value>Choose Cab</option>
                            <option value="1">All Type</option>
                            <option value="2">Hybrid</option>
                            <option value="3">Luxury</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Pick Up Date</label>
                          <input
                            type="text"
                            className="form-control date-picker"
                            placeholder="MM/DD/YY"
                          />
                          <i className="far fa-calendar-days"></i>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Pick Up Time</label>
                          <input
                            type="text"
                            className="form-control time-picker"
                            placeholder="00:00 AM"
                          />
                          <i className="far fa-clock"></i>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Driver Age</label>
                          <select className="select">
                            <option value>Choose Age</option>
                            <option value="1">Any Age</option>
                            <option value="2">25</option>
                            <option value="3">30</option>
                            <option value="4">35</option>
                            <option value="5">40</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Cab Model</label>
                          <select className="select">
                            <option value>Choose Model</option>
                            <option value="1">All Model</option>
                            <option value="2">M5 2022</option>
                            <option value="3">Q7 2021</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Your Message</label>
                          <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Write Your Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="condition"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="condition"
                          >
                            By using this form you agree to our terms &
                            conditions.
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 mx-auto">
                        <button className="theme-btn" type="submit">
                          Book Your Taxi<i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-area">
        <div className="footer-widget">
          <div className="container">
            <div className="row footer-widget-wrapper pt-120 pb-70">
              <div className="col-md-6 col-lg-4">
                <div className="footer-widget-box about-us">
                  <a href="#" className="footer-logo">
                    <img src="assets/img/logo/logo-light.png" alt = "logo" />
                  </a>
                  <p className="mb-3">
                    We are many variations of passages available but the
                    majority have suffered alteration in some form by injected
                    humour words believable.
                  </p>
                  <ul className="footer-contact">
                    <li>
                      <a href="tel:+21236547898">
                        <i className="far fa-phone"></i>+2 123 654 7898
                      </a>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt"></i>25/B Milford
                      Road, New York
                    </li>
                    <li>
                      <a href="https://live.themewild.com/cdn-cgi/l/email-protection#056c6b636a45607d64687569602b666a68">
                        <i className="far fa-envelope"></i>
                        <span
                          className="__cf_email__"
                          data-cfemail="a8c1c6cec7e8cdd0c9c5d8c4cd86cbc7c5"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Quick Links</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Update News
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Terms Of Service
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Privacy policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Our Drivers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Support Center</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Affiliates
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Booking Tips
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Book A Ride
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right"></i> Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Subscribe Our Newsletter To Get Latest Update And News
                    </p>
                    <div className="subscribe-form">
                      <form action="#">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                        <button className="theme-btn" type="submit">
                          Subscribe Now <i className="far fa-paper-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p className="copyright-text">
                  &copy; Copyright <span id="date"></span>{" "}
                  <a href="#"> Taxica </a> All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 align-self-center">
                <ul className="footer-social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" id="scroll-top">
        <i className="far fa-arrow-up"></i>
      </a>

      {/* <script
        data-cfasync="false"
        src="../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
      <script src="assets/js/jquery-3.6.0.min.js"></script>
      <script src="assets/js/modernizr.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/imagesloaded.pkgd.min.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/isotope.pkgd.min.js"></script>
      <script src="assets/js/jquery.appear.min.js"></script>
      <script src="assets/js/jquery.easing.min.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/counter-up.js"></script>
      <script src="assets/js/jquery-ui.min.js"></script>
      <script src="assets/js/jquery.timepicker.min.js"></script>
      <script src="assets/js/jquery.nice-select.min.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/main.js"></script> */}
    </>
  );
};
