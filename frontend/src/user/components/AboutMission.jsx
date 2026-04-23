function AboutMission() {
  return (
    <section className="flat-spacing-15">

      <div className="container">

        <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">

          {/* Text */}

          <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">

            <div>

              <div className="heading">
                Our Mission
              </div>

              <div className="text">

                At Marble Arts Indore, our mission is to uphold the rich
                tradition of marble craftsmanship while providing our
                customers with exquisite, custom-designed marble temples
                and statues that inspire devotion and enhance the beauty
                of their spaces.

                <br /><br />

                We are dedicated to delivering exceptional quality and
                artistry in every piece we create, ensuring that each
                product embodies both durability and elegance.

              </div>

            </div>

          </div>


          {/* Image */}

          <div className="grid-img-group">

            <div className="tf-image-wrap box-img item-2">

              <div className="img-style">

                <img
                  className="lazyload"
                  src="/assets/images/marble-image/Ganesh_Ji_Statue1.png"
                  alt="Marble Arts Indore"
                  style={{ borderRadius: "5%" }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutMission;