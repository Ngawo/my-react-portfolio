import React from "react";
import { Form } from "react-bootstrap";

export default function ContactForm() {
    return (
        <section className="contact--section">
            <div> 
                <h3 className="sub--title">Contact Me</h3>
            </div>
            <Form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-rd">First Name</span>
                        <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-rd">Last Name</span>
                        <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-rd">Email</span>
                        <input type="email" className="contact--input text-md" name="email" id="email" required />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-rd">Phone number</span>
                        <input type="tel" className="contact--input text-md" name="phone-number" id="phone-number" required />
                    </label>
                    
                    <label htmlFor="choose-topic" className="contact--label">
                        <label htmlFor="message" className="contact--label">
                            <span className="text-rd">Message</span><textarea type="tel" className="contact--input text-md" id="Message" rows="8" placeholder="type your message..."/>
                            </label>
                            <div> <button className="btn btn-primary contact--form--btn">Submit</button></div>

                       
                       
                    </label>
                   
                </div>
            </Form>
        </section>
    );
}