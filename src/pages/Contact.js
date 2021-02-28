import React from "react";
import Main from "../components/Main/index";
import GridContainer from "../components/GridContainer/index";
import GridItem from "../components/GridItem/index";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Contact = () => {
  return (
    <Router>
      <Main>
        <GridContainer>
          <GridItem>
            <div class="sub-container contact">
              <h1>Contact Info</h1>
              <ul>
                <li>Email: taanim@uw.edu</li>
                <li>Phone: (360)536-5012</li>
                <li>
                  <Link to="https://github.com/TaaniBravo" target="_blank">
                    <i class="fab fa-github pr-3 text-white"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/taanimaama"
                    target="_blank"
                  >
                    <i class="fab fa-facebook pr-3 text-white"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/taani-maama-b86583157/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin pr-3 text-white"></i>
                  </Link>
                </li>
                <li>
                  <Link to="mailto:taanim@uw.edu" target="_blank">
                    <i class="fas fa-envelope-open-text text-white"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </GridItem>
        </GridContainer>
      </Main>
    </Router>
  );
};

export default Contact;
