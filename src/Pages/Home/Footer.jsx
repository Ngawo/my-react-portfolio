import React from "react";
import { FaGithub,FaLinkedin ,FaTwitter, FaInstagram,  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="www.linkedin.com/in/zanele-mangqangwana/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <div className="copyright">
        <p>&copy; Copyrights 2024. All Rights Reserved Designed by Zanele Mangqangwana.</p>
      </div>
    </footer>
  );
}
