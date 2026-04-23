function Testimonial() {
  return (
    <section className="flat-spacing-18 bg_grey-5">
      <div className="container">

        <div className="flat-title title-lg">
          <span className="title">Customer Reviews</span>
        </div>

        <div className="wrap-carousel">

          <div className="swiper tf-sw-testimonial">

            <div className="swiper-wrapper">

              {/* Review 1 */}

              <div className="swiper-slide">

                <div className="testimonial-item bg_white style-column">

                  <div className="rating">
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                  </div>

                  <div className="text">
                    “We got the Gauri Shankar statue from here, and it turned
                    out exactly as we hoped. The craftsmanship is beautiful and
                    the detailing is impressive. It radiates a divine energy
                    that brings peace to our home.”
                  </div>

                  <div className="author">
                    <div className="name">Priya Kumawat</div>
                  </div>

                </div>

              </div>


              {/* Review 2 */}

              <div className="swiper-slide">

                <div className="testimonial-item bg_white style-column">

                  <div className="rating">
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                  </div>

                  <div className="text">
                    “मैंने Marble Arts Indore से संगमरमर की हाथी जोड़ी ली।
                    क्वालिटी बहुत बढ़िया है और नक्काशी भी खूबसूरत है।
                    समय पर डिलीवरी हुई और पैकिंग भी अच्छी थी।”
                  </div>

                  <div className="author">
                    <div className="name">Ganesh Ranawat</div>
                  </div>

                </div>

              </div>


              {/* Review 3 */}

              <div className="swiper-slide">

                <div className="testimonial-item bg_white style-column">

                  <div className="rating">
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                  </div>

                  <div className="text">
                    “हमने Marble Arts Indore से अपने Office के लिए Marble
                    Mandir बनवाया। मंदिर की क्वालिटी, डिज़ाइन और फिनिशिंग
                    शानदार है। पैकिंग और डिलीवरी भी सुरक्षित रही।”
                  </div>

                  <div className="author">
                    <div className="name">Ankur Mehta</div>
                  </div>

                </div>

              </div>


              {/* Review 4 */}

              <div className="swiper-slide">

                <div className="testimonial-item bg_white style-column">

                  <div className="rating">
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                    <i className="icon-start"></i>
                  </div>

                  <div className="text">
                    “Marble Arts Indore से शिव परिवार की मूर्ति खरीदी।
                    क्वालिटी और नक्काशी बेहतरीन है। समय पर डिलीवरी और
                    सुरक्षित पैकिंग मिली।”
                  </div>

                  <div className="author">
                    <div className="name">Suraj Barole</div>
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

export default Testimonial;