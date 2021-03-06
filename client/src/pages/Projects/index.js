import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";
import Main from "../../components/Main";
import trailChasers from "../../images/trailchasers.png";
import budgetTracker from "../../images/budgettracker.png";
import eatDaBurger from "../../images/eat-da-burger.png";
import oneWorldAcademy from "../../images/oneworldacademy.png";
import teamBase from "../../images/teambase.png";
import fitnessTracker from "../../images/fitness-tracker.png";
import "./style.scss";

const Projects = () => {
  return (
    <div>
      <Main>
        <GridContainer className="grid__proj">
          <GridItem id="proj-header">
            <h1>Projects</h1>
          </GridItem>
          <GridItem id="projects">
            <p className="note">*Hover over images for links and details*</p>
            <div className="projects__container">
              <div className="proj-1">
                <div className="img__container proj__img">
                  <img
                    src={oneWorldAcademy}
                    alt="One World Academy LMS"
                    loading="lazy"
                  />
                  <div className="overlay">
                    <p>One World Academy LMS</p>
                    <a href="https://github.com/TaaniBravo/One-World-Academy">
                      GitHub Repo
                    </a>
                    <a href="https://oneworldacademy.herokuapp.com/">
                      Live URL
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <div className="proj-2">
                <div className="img__container proj__img">
                  <img
                    src={trailChasers}
                    alt="Trail Chasers Hiking App"
                    loading="lazy"
                  />
                  <div className="overlay">
                    <p>Trail Chasers Hike Finder</p>
                    <a href="https://github.com/TaaniBravo/Trail-Chaser-Hiking-App">
                      GitHub Repo
                    </a>
                    <a href="https://taanibravo.github.io/Trail-Chaser-Hiking-App/">
                      Live URL
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <div className="proj-3">
                <div className="img__container proj__img">
                  <img src={eatDaBurger} alt="Eat Da Burger" loading="lazy" />
                  <div className="overlay">
                    <p>Eat Da Burger</p>
                    <a href="https://github.com/TaaniBravo/13-Eat-Da-Burger">
                      GitHub Repo
                    </a>
                    <a href="https://eat-da-burger-or-else.herokuapp.com/">
                      Live URL
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <div className="proj-4">
                <div className="img__container proj__img">
                  <img
                    src={teamBase}
                    alt="TeamBase: Employee Directory"
                    loading="lazy"
                  />
                  <div className="overlay">
                    <p>TeamBase: Employee Directory</p>
                    <a href="https://github.com/TaaniBravo/19-Employee-Directory">
                      GitHub Repo
                    </a>
                    <a href="https://teambase-directory.herokuapp.com/">
                      Live URL
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <div className="proj-5">
                <div className="img__container proj__img">
                  <img
                    src={budgetTracker}
                    alt="Offline Budget Tracker"
                    loading="lazy"
                  />

                  <div className="overlay">
                    <p>IndexDB Budget Tracker</p>
                    <a href="https://github.com/TaaniBravo/Online-Offline-Budget-Trackers">
                      GitHub Repo
                    </a>
                    <a href="https://on-n-offline-budget.herokuapp.com/">
                      Live URL
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <div className="proj-6">
                <div className="img__container proj__img">
                  <img
                    src={fitnessTracker}
                    alt="Daily Fitness Tracker"
                    loading="lazy"
                  />

                  <div className="overlay">
                    <p>MongoDB Workout Tracker</p>
                    <a href="https://github.com/TaaniBravo/17-Workout-Tracker">
                      GitHub Repo
                    </a>
                    <a href="https://daily-fitness-tracker.herokuapp.com/">
                      Live URL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem id="skillset">
            <div className="skillset__container">
              <h2 className="lang__header">Current Languages</h2>
              <br />
              <div className="sub-container">
                <ul className="language__icons">
                  <li>
                    <i className="fab fa-html5"></i> HTML
                  </li>
                  <li>
                    <i className="fab fa-js-square"></i> JS
                  </li>
                  <li>
                    <i className="fab fa-css3-alt"></i> CSS
                  </li>
                  <li>
                    <i className="fab fa-sass"></i> SCSS
                  </li>
                  <li>
                    <i className="fas fa-database"></i> SQL and NoSQL
                  </li>
                  <li>
                    <i className="fab fa-react"></i> ReactJS
                  </li>
                </ul>
              </div>
              <br />
              <h4>Currently working towards...</h4>
              <div className="sub-container">
                <ul>
                  <li>Advanced JS Algo thinking.</li>
                  <li>Deep knowledge base of CSS.</li>
                  <li>ReactJS ins and outs.</li>
                </ul>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </Main>
    </div>
  );
};

export default Projects;
