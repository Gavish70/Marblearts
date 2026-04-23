import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import { useEnquiry } from "../../contexts/EnquiryContext";



function Footer() {

  const [categories, setCategories] = useState([]);
  const { openEnquiry } = useEnquiry();

useEffect(() => {

    axios
      .get("/footer-categories")
      .then((res) => {
        setCategories(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const slugify = (text = "") =>
  text.toLowerCase().replace(/\s+/g, "-");

  return (
    <footer id="footer" className="footer background-gray md-pb-70">

      <div className="footer-wrap">

        <div className="footer-body">

          <div className="container">

            <div className="row">


              {/* Company Info */}

              <div className="col-xl-3 col-md-6 col-12">

                <div className="footer-infor">

                  <div className="footer-logo">

                    <a href="/">
                      <img
                        src="/assets/images/marble-image/Marble_Arts_logo_t.png"
                        alt="Marble Arts Indore"
                      />
                    </a>

                  </div>

                  <ul>

                    <li>
                      <p>
                        Address: 639/9 Nehru Nagar, Atal Dwar Main Road,
                        Indore, Madhya Pradesh.
                      </p>
                    </li>

                    <li>
                      <p>
                        Email:
                        <a href="mailto:info@marbleartsindore.com">
                          info@marbleartsindore.com
                        </a>
                      </p>
                    </li>

                    <li>
                      <p>
                        Phone:
                        <a href="tel:+919827216148">
                          +91-9827216148
                        </a>
                      </p>
                    </li>

                    <li>
                      <p>
                        Phone:
                        <a href="tel:+919827216148">
                          +91-9827216148
                        </a>
                      </p>
                    </li>

                  </ul>


                  <a
                    href="https://www.google.com/maps/place/Marble+Arts+(Mandir-Murti+Store)"
                    className="tf-btn btn-line"
                    target="_blank"
                  >
                    Get direction
                    <i className="icon icon-arrow1-top-left"></i>
                  </a>


                  {/* Social Icons */}

                  <ul className="tf-social-icon d-flex gap-10">

                    <li>
                      <a
                        href="https://www.facebook.com/MarbleArtsIndore/"
                        className="box-icon w_34 round social-facebook social-line"
                        target="_blank"
                      >
                        <i className="icon fs-14 icon-fb"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="http://api.whatsapp.com/send?phone=+919827216148"
                        className="box-icon w_34 round social-twiter social-line"
                        target="_blank"
                      >
                        <i className="icon fs-12 icon-whatsapp"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/marblearts_indore/"
                        className="box-icon w_34 round social-instagram social-line"
                        target="_blank"
                      >
                        <i className="icon fs-14 icon-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.youtube.com/@MarbleArtsIndore"
                        className="box-icon w_34 round social-pinterest social-line"
                        target="_blank"
                      >
                        <i className="icon fs-14 icon-youtube"></i>
                      </a>
                    </li>

                  </ul>

                </div>

              </div>


              {/* Quick Links */}

              <div className="col-xl-2 col-md-6 col-12 footer-col-block">

                <h6 className="quick">Quick Links</h6>

                <ul className="footer-menu-list">

                  <li>
                    <a href="/" className="footer-menu_item">Home</a>
                  </li>

                  <li>
                    <a href="/about" className="footer-menu_item">About Us</a>
                  </li>

                  <li>
                    <a href="/shipping-policy" className="footer-menu_item">
                      Shipping Policy
                    </a>
                  </li>

                  <li>
                    <a href="/contact" className="footer-menu_item">Contact</a>
                  </li>

                  <li>
                    <button onClick={openEnquiry} className="footer-menu_item" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>
                      Enquiry
                    </button>
                  </li>

                  <li>
                    <a href="/blog" className="footer-menu_item">Blog</a>
                  </li>

                </ul>


              </div>


              {/* Categories (Static for now) */}

              <div className="col-xl-2 col-md-6 col-12 footer-col-block">

                <h6>Our Categories</h6>

                <ul>

        {categories.map((cat) => (

          <li key={cat.id}
          style={{fontWeight:"600", lineHeight:"30px"}}>

            <Link to={`/product/${slugify(cat.maincategory)}`}>
              {cat.maincategory}
            </Link>

          </li>

        ))}

      </ul>


              </div>


              {/* Map */}

              <div className="col-xl-5 col-md-6 col-12">

                <h6>Where We Are Located</h6>

                <div style={{ position: "relative" }}>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839.908397055399!2d75.8815705514847!3d22.735049924686532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6d5c629411%3A0xabe9f4cc6e5e4e1b!2sMarble%20Arts%20(Mandir-Murti%20Store)!5e0!3m2!1sen!2sin!4v1727765672995!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>

                </div>

              </div>


            </div>

          </div>

        </div>


        {/* Footer Bottom */}

        <div className="footer-bottom">

          <div className="container">

            <div className="footer-bottom-wrap d-flex justify-content-between align-items-center">

              <div className="footer-menu_item">

                Copyright © 2024 Marble Arts Indore.
                Design & Developed By 

                <a href="https://www.linkedin.com/in/gavish-patel/" target="_blank">
                  <span> Gavish Patel</span>
                </a>

              </div>


              <div className="tf-payment">

                <img src="/assets/images/payments/visa.png" alt="payment" />
                <img src="/assets/images/payments/img-1.png" alt="payment" />
                <img src="/assets/images/payments/img-2.png" alt="payment" />
                <img src="/assets/images/payments/img-3.png" alt="payment" />
                <img src="/assets/images/payments/img-4.png" alt="payment" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;