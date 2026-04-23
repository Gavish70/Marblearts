function ContactForm() {
  return (
    <>

      {/* Page Title */}

      <div className="tf-page-title style-2">

        <div className="container-full">

          <div className="heading text-center">
            <h1 className="head">Contact Us</h1>
          </div>

        </div>

      </div>


      {/* Contact Section */}

      <section className="flat-spacing-21">

        <div className="container">

          <div className="tf-grid-layout gap30 lg-col-2">


            {/* Left Side */}

            <div className="tf-content-left">

              <h5 className="mb_20" style={{ fontSize: "27px" }}>
                Visit Our Store
              </h5>


              <div className="mb_20">

                <p className="mb_15">
                  <strong>Address</strong>
                </p>

                <p>
                  639/9 Nehru Nagar, Atal Dwar Main Rd, Patni Pura,
                  Indore, Madhya Pradesh 452011
                </p>

              </div>


              <div className="mb_20">

                <p className="mb_15">
                  <strong>Phone</strong>
                </p>

                <p>+91 98272-16148</p>
                <p>+91 88393-01016</p>

              </div>


              <div className="mb_20">

                <p className="mb_15">
                  <strong>Email</strong>
                </p>

                <p>info@marbleartsindore.com</p>

              </div>


              <div className="mb_36">

                <p className="mb_15" style={{ fontSize: "17px" }}>
                  <strong>Open Time</strong>
                </p>

                <p className="mb_15">Monday 10 am–6:30 pm</p>
                <p className="mb_15">Tuesday 10 am–8:30 pm</p>
                <p className="mb_15">Wednesday 10 am–8:30 pm</p>
                <p className="mb_15">Thursday 10 am–8:30 pm</p>
                <p className="mb_15">Friday 10 am–8:30 pm</p>
                <p className="mb_15">Saturday 10 am–8:30 pm</p>
                <p className="mb_15">Sunday 10 am–8:30 pm</p>

              </div>

            </div>


            {/* Right Side Form */}

            <div className="tf-content-right">

              <h5 className="mb_20" style={{ fontSize: "17px" }}>
                Get in Touch
              </h5>

              <p className="mb_24" style={{ fontSize: "17px" }}>
                If you're crafting exquisite marble statues or temples
                and would like to collaborate with us, feel free to
                reach out.
              </p>


              <form className="form-contact">

                <div className="d-flex gap-15 mb_15">

                  <fieldset className="w-100">

                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      required
                    />

                  </fieldset>


                  <fieldset className="w-100">

                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                    />

                  </fieldset>

                </div>


                <div className="mb_15">

                  <textarea
                    name="msg"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>

                </div>


                <div className="send-wrap">

                  <button
                    type="submit"
                    className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                  >
                    Send
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default ContactForm;