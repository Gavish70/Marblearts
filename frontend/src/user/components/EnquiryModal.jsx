import { useState } from "react";

function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    city: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const { name, contact, city, description } = formData;

    // Format the message
    const message = `*New Enquiry*\nName: ${name}\nContact: ${contact}\nCity: ${city}\nDescription: ${description}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // Your WhatsApp number
    const phoneNumber = '919827216148'; // e.g., '1234567890'

    // Create the WhatsApp link
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');

    // Reset form and close modal
    setFormData({
      name: "",
      contact: "",
      city: "",
      description: ""
    });
    onClose();
  };

  return (
    <div className={`modal modalCentered fade form-sign-in modal-part-content ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} id="login">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Post An Enquiry For!</div>
            <span className="icon-close icon-close-popup" data-bs-dismiss="modal" onClick={onClose}></span>
          </div>
          <div className="tf-login-form">
            <form id="enquiryForm" onSubmit={sendToWhatsApp}>
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label className="tf-field-label" htmlFor="name">Name *</label>
              </div>
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  name="contact"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
                <label className="tf-field-label" htmlFor="contact">Contact Number *</label>
              </div>
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <label className="tf-field-label" htmlFor="city">City *</label>
              </div>
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                <label className="tf-field-label" htmlFor="description">Description *</label>
              </div>
              <div className="bottom">
                <div>
                  <button
                    type="submit"
                    className="w-100 fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
                    style={{ border: "1px solid #000" }}
                  >
                    <span>Send Message</span> <i className="icon icon-arrow1-top-left"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnquiryModal;