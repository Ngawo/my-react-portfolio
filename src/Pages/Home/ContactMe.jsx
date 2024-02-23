import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const recaptchaRef = useRef(null);
  const onChange= () =>{

  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    

    // Send email using emailjs
    emailjs.sendForm("service_xp7k5on", "template_ia0yz3w", event.target, "OkDz7aA-TsfOrtNE5")
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        // Optionally, you can reset the form after successful submission
        event.target.reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };
  return (
    <section id="contactSection" className="contact--section">
      <h1 className="contact--heading underline">Contact Me</h1>
      <div className="contact_info">
      <div className="contact-container">
          <div className="contact-details">
          <div className="phone">
            <FaPhone />
            <span>+7781512665</span>
          </div>
          <div className="email">
            <FaEnvelope />
            <span>zanmangqangwana665@gmail.com</span>
          </div>
        </div>
      
        <div className="map-container">
          <iframe
            title="Cape Town Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.641232890256!2d18.423300315042267!3d-33.924868601215605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6708b49f29b7%3A0x9f2a4888020c82e8!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1645076322783!5m2!1sen!2sus"
            width="500"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        </div>
        
        <div className="form-wrapper">
          <Form className="contact--form--container" onSubmit={handleSubmit}>
            <div className="container">
              <label htmlFor="first-name" className="contact--label">
                <span className="text-rd">Your Name</span>
                <input type="text" className="contact--input text-md" name="first_name" id="first-name" required />
              </label>
              <label htmlFor="Subject" className="contact--label">
                <span className="text-rd">Subject</span>
                <input type="text" className="contact--input text-md" name="subject" id="subject" required />
              </label>
              <label htmlFor="email" className="contact--label">
                <span className="text-rd">Email</span>
                <input type="email" className="contact--input text-md" name="email" id="email" required />
              </label>
              <label htmlFor="message" className="contact--label">
                <span className="text-rd">Message</span>
                <textarea className="contact--input text-rd" id="message" name="message" rows="8" placeholder="Type your message..." />
              </label>
              <div>
                <div className="recaptcha-container">
                  <ReCAPTCHA
                    sitekey="6LdusngpAAAAAHwBm4iPPEOzxlhNkszDRjoOwJMw"
                    ref={recaptchaRef}
                    onChange={onChange}
                  />
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
