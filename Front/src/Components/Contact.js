import React from "react";
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="about-heading">
                        <h1 className="custom-font">Contact-us</h1>
                    </div>
                    <div className="container-fluid contact-us">
                        <div className="row">
                            <Fade left>
                                <div className="col-md-6 contact-leftgrid">
                                    <div>Feel free to get in touch with us.</div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                        <div>
                                            <form action="#" className="contact-form" >
                                                <input type="email" name="email" placeholder="Your Email Address" className="form-email" />
                                                <input type="text" name="name" placeholder="Your Full Name" className="form-email" />
                                                <input type="text" name="subject" placeholder="Subject" className="form-email" />
                                                <textarea placeholder="Your Message Here..." rows="3" className="form-email"  />
                                                <button type="button" class="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-md-6">
                                    <img className="contact-logoimage" src="https://dl.dropboxusercontent.com/s/izcwl5db4a8pmxx/email-illustration.jpg?dl=0" alt="Random_Image" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;