function ContactMap() {
  return (
    <div className="w-100">

      <div className="col-md-12">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839.908397055399!2d75.8815705514847!3d22.735049924686532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6d5c629411%3A0xabe9f4cc6e5e4e1b!2sMarble%20Arts%20(Mandir-Murti%20Store)!5e0!3m2!1sen!2sin!4v1727765672995!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>

    </div>
  );
}

export default ContactMap;