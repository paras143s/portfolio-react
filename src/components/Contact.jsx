import React from 'react';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <h2 className="h2 section-title">MESSAGE ME</h2>
          <div className="wrapper">
            <form id="contactForm" className="contact-form" action="connect.php" method="post">
              <input type="text" name="name" placeholder="Name" required className="contact-input" />
              <input type="email" name="email" placeholder="Email" required className="contact-input" />
              <textarea name="message" placeholder="Message" required className="contact-input"></textarea>
              <button type="submit" className="btn-submit">Submit Message</button>
            </form>
            <ul className="contact-list">
              <li className="contact-item">
                <div>
                  <h3 className="contact-item-title">Address</h3>
                  <address className="contact-item-link">New Ashok Nagar, Delhi India</address>
                </div>
              </li>
              <li className="contact-item">
                <div>
                  <h3 className="contact-item-title">Email</h3>
                  <a href="mailto:prassinghrajput786@gmail.com" className="contact-item-link">parassinghrajput786@gmail.com</a>
                </div>
              </li>
              <li className="contact-item">
                <div>
                  <h3 className="contact-item-title">Phone</h3>
                  <a href="tel:+918789926747" className="contact-item-link">+91 8789926747</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
    </section>
  );
};

export default Contact;