import React from "react";
import { Form } from "react-bootstrap";

export default function ContactForm() {
    return (
        <section className="contact--section">
            <div> 
                <h3 className="sub--title">Contact Me</h3>
            </div>
            <div className="form-wrapper">
                <Form className="contact--form--container">
                    <div className="container">
                        <label htmlFor="first-name" className="contact--label">
                            <span className="text-rd">Your Name</span>
                            <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
                        </label>
                        <label htmlFor="email" className="contact--label">
                            <span className="text-rd">Email</span>
                            <input type="email" className="contact--input text-md" name="email" id="email" required />
                        </label>
                        <label htmlFor="message" className="contact--label">
                            <span className="text-rd">Message</span>
                            <textarea className="contact--input text-rd" id="Message" rows="8" placeholder="Type your message..." />
                        </label>
                        <button className="btn btn-primary contact--form--btn">Submit</button>
                    </div>
                </Form>
            </div>
        </section>
    );
}
