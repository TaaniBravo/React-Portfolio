import React from "react";
import Main from "../../components/Main/index";
import { BrowserRouter as Router, Link as a } from "react-router-dom";
import "./style.scss";

const Contact = () => {
  return (
    <Router>
      <Main>
        <section className="contact">
          <div className="contact__container">
            <h1>Contact Info</h1>
            <ul>
              <li>Email: taanim@uw.edu</li>
              <li>Phone: (360)536-5012</li>
            </ul>
            <div className="icon__container">
              <ul>
                <li>
                  <a
                    href="https://github.com/TaaniBravo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github pr-3"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/taanimaama"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook pr-3"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/taani-maama-b86583157/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin pr-3"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:taanim@uw.edu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope-open-text"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Main>
    </Router>
  );
};

export default Contact;
