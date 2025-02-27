import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>
        For inquiries, feedback, or support, please reach out to us using the contact details below or fill out the form.
      </p>
      <div className="contact-info">
        <p><strong>Phone:</strong> +254 20 272 5691</p>
        <p><strong>Email:</strong> info@kmtc.ac.ke</p>
        <p><strong>Address:</strong> P.O. Box 30195-00100, Nairobi, Kenya</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required /><br />
        <input type="email" placeholder="Your Email" required /><br />
        <textarea placeholder="Your Message" rows="5" required></textarea><br />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;