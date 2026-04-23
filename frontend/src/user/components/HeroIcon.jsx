function HeroIcon() {
  return (
    <section className="flat-spacing-27 flat-iconbox wow fadeInUp has-line-bottom background-image">

      <div className="flat-title">

        <p className="sub-title">
          Invite divine grace with our exquisite God statues.
        </p>

        <span className="title wow fadeInUp">
          Why Choose Us
        </span>

        <img
          src="/assets/images/marble-image/sdsdsdn.png"
          width="450"
          alt="Marble Arts Indore"
        />

      </div>

      <div className="container">

        <div className="wrap-carousel wrap-mobile">

          <div className="swiper tf-sw-mobile">

            <div className="swiper-wrapper wrap-iconbox">


              {/* Icon 1 */}

              <div className="swiper-slide">

                <div className="tf-icon-box style-row">

                  <div className="icon">
                    <i className="icon-shipping"></i>
                  </div>

                  <div className="content">
                    <div className="title fw-4">Handcrafted Art</div>
                    <p>Made by skilled artisans.</p>
                  </div>

                </div>

              </div>


              {/* Icon 2 */}

              <div className="swiper-slide">

                <div className="tf-icon-box style-row">

                  <div className="icon">
                    <i className="icon-payment fs-22"></i>
                  </div>

                  <div className="content">
                    <div className="title fw-4">Easy Payments</div>
                    <p>Multiple secure options.</p>
                  </div>

                </div>

              </div>


              {/* Icon 3 */}

              <div className="swiper-slide">

                <div className="tf-icon-box style-row">

                  <div className="icon">
                    <i className="icon-return fs-20"></i>
                  </div>

                  <div className="content">
                    <div className="title fw-4">
                      Guaranteed Authenticity
                    </div>
                    <p>100% genuine materials.</p>
                  </div>

                </div>

              </div>


              {/* Icon 4 */}

              <div className="swiper-slide">

                <div className="tf-icon-box style-row">

                  <div className="icon">
                    <i className="icon-suport"></i>
                  </div>

                  <div className="content">
                    <div className="title fw-4">Expert Support</div>
                    <p>Help choosing the best.</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroIcon;