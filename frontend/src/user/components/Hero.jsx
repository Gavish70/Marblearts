function Hero() {
  return (
    <section className="tf-slideshow slideshow-effect slider-effect-fade style-padding position-relative">
      
      <div className="swiper tf-sw-effect">
        
        <div className="swiper-wrapper">

          <div className="swiper-slide" lazy="true">
            
            <div className="wrap-slider">
              
              <div className="img-slider">

                <img
                  className="lazyload"
                  src="/assets/images/marble-image/banner_image.webp"
                  alt="marblearts indore"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;