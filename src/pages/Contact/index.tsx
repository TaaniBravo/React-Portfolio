import React from "react";
import Main from "../../components/Main/index";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.scss";

const Contact = () => {
  return (
    <Router>
      <Main>
        <section className='contact'>
          <div className='contact__container'>
            <h1>Contact Info</h1>
            <ul>
              <li>
                Email:{" "}
                <a
                  className='email'
                  href='mailto:taani1maama@gmail.com'
                  target='_blank'
                  rel='noreferrer'>
                  taani1maama@gmail.com
                </a>
              </li>
              <li>Phone: (360)536-5012</li>
            </ul>
            <div className='icon__container'>
              <ul>
                <li>
                  <a
                    href='https://github.com/TaaniBravo'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-github-original'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/taani-maama/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-linkedin-plain'></i>
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
