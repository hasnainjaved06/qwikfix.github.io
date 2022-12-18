import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container-fluid" id="footer">
      <div className="row">
        <div className="row mr-auto ml-auto ">
          {/* <a href="#" className="social-icon" target="_blank" ><i class="fa fa-globe fa-2x   "></i></a> */}

          <a href="#" className="social-icon" target="_blank">
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>

          <a href="#" className="social-icon" target="_blank">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>

          <a href="mailto:pecmyhelp@gmail.com" className="social-icon">
            <i class="fab fa-whatsapp fa-2x"></i>
            {/* <i className="fa fa-envelope " target="_blank"></i> */}
          </a>
        </div>
      </div>
      <p className="col-12 copyright">Copyright © 2022</p>
    </footer>
  );
}

export default Footer;
