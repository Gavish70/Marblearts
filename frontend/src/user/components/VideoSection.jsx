function VideoSection() {
  return (
    <section className="flat-spacing-15 bg_beige-3">

      <div className="container">

        <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">

          {/* Google Map */}

          <div>

            <div className="flat-title">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839.908397055399!2d75.8815705514847!3d22.735049924686532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6d5c629411%3A0xabe9f4cc6e5e4e1b!2sMarble%20Arts%20(Mandir-Murti%20Store)!5e0!3m2!1sen!2sin!4v1727765672995!5m2!1sen!2sin"
                width="100%"
                height="700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>


          {/* Video */}

          <div className="grid-img-group">

            <div>

              <div className="img-style">

                <video
                  id="myVideo"
                  controls
                  style={{ cursor: "pointer", width: "100%" }}
                >

                  <source
                    src="/assets/images/Marbel-Arts-Indore.mp4"
                    type="video/mp4"
                  />

                  <source
                    src="/assets/images/video.webm"
                    type="video/webm"
                  />

                  Your browser does not support the video tag.

                </video>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default VideoSection;