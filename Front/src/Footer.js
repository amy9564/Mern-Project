import React from "react";
import { FcPhone , FcHome , FcNext , FcVoicemail } from "react-icons/fc";
import { FaFax } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
          <div className="container-fluid footer">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3 footer-left1">
                      <h2 className="footer-header">Paragraph</h2>
                      <p className="footer-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="col-md-3 footer-left2">
                    <h2 className="footer-header">Links</h2>
                      <div className="footer-links">
                        <div><FcNext /><NavLink to="/home" className="text-reset links">Home</NavLink></div>
                        <div><FcNext /><NavLink to="/about" className="text-reset links">About US</NavLink></div>
                        <div><FcNext /><NavLink to="/contact" className="text-reset links">Contact Us</NavLink></div>
                        <div><FcNext /><NavLink to="/terms" className="text-reset links">Terms of Use</NavLink></div>
                        <div><FcNext /><NavLink to="/policy" className="text-reset links">Privacy Policy</NavLink></div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3 footer-left3">
                    <h2 className="footer-header">Services</h2>
                      <div className="footer-links">
                        <div><FcNext /><NavLink to="/home" className="text-reset links">Web Design</NavLink></div>
                        <div><FcNext /><NavLink to="/home" className="text-reset links">Web </NavLink></div>
                        <div><FcNext /><NavLink to="/home" className="text-reset links">Busssines</NavLink></div>
                        <div><FcNext /><NavLink to="/home" className="text-reset links">Data Analysis</NavLink></div>
                        <div><FcNext /><NavLink to="/home" className="text-reset links">Graphic design</NavLink></div>
                      </div>
                  </div>
                  <div className="col-md-3 footer-left4">
                    <h2 className="footer-header">Address</h2>
                      <div className="footer-links">
                        <div className="footer-linkbotom"><FcHome /> <p className="text-reset links">New York</p></div>
                        <div className="footer-linkbotom"><FcVoicemail /> <p className="text-reset links">info@example </p></div>
                        <div className="footer-linkbotom"><FcPhone /><p className="text-reset links"> + 01 234 567 88</p></div>
                        <div className="footer-linkbotom"><FaFax /><p className="text-reset links"> + 01 234 567 89</p></div>
                      </div>
                  </div> 
                </div> 
              </div>   
            </div>
            <hr className="footer-horizontalline" />
            <div className="row">
            <div className="footer-bottom">
              <div className="footer-bottom1">Pyare Kids</div>
              <p className="footer-bottom2">© 2018 Treact Inc. All Rights Reserved.</p>
              <div className="footer-sociallogo">
                <img className="footer-sociallogo1" src="https://dl.dropboxusercontent.com/s/ufyzj36l6g77ejk/twitter.png?dl=0" alt="Random_logo" />
                <img className="footer-sociallogo1" src="https://dl.dropboxusercontent.com/s/vvusiityvkk04x5/facebook.png?dl=0" alt="Random_logo" />
                <img className="footer-sociallogo1" src="https://dl.dropboxusercontent.com/s/91cx517kw9bvtao/instagram.png?dl=0" alt="Random_logo" />
                <img className="footer-sociallogo1" src="https://dl.dropboxusercontent.com/s/5aojqp5e10jnnj5/youtube.png?dl=0" alt="Random_logo" />
              </div>
            </div>
            </div>
          </div>
        </div>
    )
};

export default Footer;