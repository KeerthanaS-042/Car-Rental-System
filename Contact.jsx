import React from 'react';

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, feel free to contact us using the information below:</p>
          <p><strong>Address:</strong> 123 Car Rental Street,aravind street,Coimbatore,639424</p>
          <p><strong>Phone:</strong> +91 9123456789</p>
          <p><strong>Email:</strong> info@carrentalsystem.com</p>
          <p><strong>Opening Hours:</strong> Monday to Friday: 9:00 AM - 6:00 PM</p>
        </div>
        <div className="contact-image">
          <img src="/src/images/ami.png" alt="Contact" />
        </div>
      </div>
    </>
  );
}

export default Contact;
