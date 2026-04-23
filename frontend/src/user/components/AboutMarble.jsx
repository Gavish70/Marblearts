function AboutMarble() {
  return (
    <section className="flat-spacing-15 bg_beige-3">
      <div className="container">

        <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">

          {/* Text Section */}

          <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">

            <div>

              <div className="flat-title">

                <span className="title wow fadeInUp">
                  About Marble Arts
                </span>

                <img
                  src="/assets/images/marble-image/sdsdsdn.png"
                  width="450"
                  alt="Marble Arts Indore"
                />

              </div>


              <div className="text">

                For over 30 years, Marble Arts Indore has been a trusted name in
                crafting exquisite marble temples and statues. Our commitment
                to quality and craftsmanship sets us apart, making us a
                preferred choice for customers seeking both traditional and
                contemporary designs.

                <br /><br />

                We specialize in creating customized marble temples that are
                aesthetically unique and built for durability. Each temple is
                crafted with strong joint techniques and a mirror-finished
                polish, ensuring it retains its pristine look for years.

                <br /><br />

                Our expertise extends beyond temples. We also offer a diverse
                collection of marble statues including Narmadeshwar Shivling,
                Hanuman Ji, Ganesh Ji, and many more divine sculptures.

              </div>

            </div>

          </div>


          {/* Image Section */}

          <div className="grid-img-group">

            <div className="tf-image-wrap box-img item-1">

              <div className="img-style">
              </div>

            </div>


            <div className="tf-image-wrap box-img item-2">

              <div className="img-style">

                <img
                  className="lazyload"
                  src="/assets/images/marble-image/Marble_Arts_logo.png"
                  alt="Marble Arts Indore"
                  style={{ borderRadius: "3%" }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutMarble;