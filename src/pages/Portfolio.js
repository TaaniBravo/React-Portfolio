import Main from "../components/Main/index";
import GridContainer from "../components/GridContainer/index";
import GridItem from "../components/GridItem/index";
import "../scss/Portfolio.scss";
import profilePic from "../images/supremetee-cropped.jpg";
import trailChasers from "../images/trailchasers.png";
import budgetTracker from "../images/budgettracker.png";
import eatDaBurger from "../images/eat-da-burger.png";
import oneWorldAcademy from "../images/oneworldacademy.png";
import teamBase from "../images/teambase.png";
import fitnessTracker from "../images/fitness-tracker.png";

const Portfolio = () => {
  return (
    <div>
      <Main>
        <GridContainer>
          <GridItem id="home">
            <h2 className="heading-1 animate__animated animate__rotateInDownLeft animate__slow">
              &#123; Dream, Develop, Create &#125;
            </h2>
            <h3 className="heading-2"> Full-Stack Developer, </h3>
            <h1 className="heading-3"> Taani Maama</h1>
          </GridItem>
          <GridItem id="profile-pic">
            <div className="img__container profile-pic animate__animated animate__fadeIn animate__slower animate__delay-1s">
              <img src={profilePic} alt="Taani Maama" />
            </div>
          </GridItem>
          <GridItem id="about">
            <p className="bio__container">
              Started his coding journey in Sept. 2020. Continuously growing at
              an exponential rate, learning new techniques and practices in his
              pursuit to be an amazing developer. Coming out of UW's Coding
              Bootcamp he has a strong foundational knowledge of HTML, CSS,
              JavaScript, SQL, MERN, JQuery and more technologies he continues
              to teach himself. His background as a professional project
              manager, and leading teams in high stress environments in past
              careers has helped him build a solid foundation for his mindful
              yet competitive approach.
            </p>
          </GridItem>
          <GridItem id="proj-header">
            <h1>Projects</h1>
          </GridItem>
          <GridItem id="projects">
            <div className="projects__container">
              <div className="proj-1">
                <div className="img__container">
                  <img src={oneWorldAcademy} alt="One World Academy LMS" />
                </div>
                <a href="https://github.com/TaaniBravo/One-World-Academy">
                  GitHub Repo
                </a>{" "}
                | <a href="https://oneworldacademy.herokuapp.com/">Live URL</a>
              </div>
              <div className="proj-2">
                <div className="img__container">
                  <img src={trailChasers} alt="Trail Chasers Hiking App" />
                </div>
                <a href="https://github.com/TaaniBravo/Trail-Chaser-Hiking-App">
                  GitHub Repo
                </a>{" "}
                |{" "}
                <a href="https://taanibravo.github.io/Trail-Chaser-Hiking-App/">
                  Live URL
                </a>
              </div>
              <div className="proj-3">
                <div className="img__container">
                  <img src={eatDaBurger} alt="Eat Da Burger" />
                </div>
                <a href="https://github.com/TaaniBravo/13-Eat-Da-Burger">
                  GitHub Repo
                </a>{" "}
                |{" "}
                <a href="https://eat-da-burger-or-else.herokuapp.com/">
                  Live URL
                </a>
              </div>
              <div className="proj-4">
                <div className="img__container">
                  <img src={teamBase} alt="TeamBase: Employee Directory" />
                </div>
                <a href="https://github.com/TaaniBravo/19-Employee-Directory">
                  GitHub Repo
                </a>{" "}
                |{" "}
                <a href="https://teambase-directory.herokuapp.com/">Live URL</a>
              </div>
              <div className="proj-5">
                <div className="img__container">
                  <img src={budgetTracker} alt="Offline Budget Tracker" />
                </div>
                <a href="https://github.com/TaaniBravo/Online-Offline-Budget-Trackers">
                  GitHub Repo
                </a>{" "}
                |{" "}
                <a href="https://on-n-offline-budget.herokuapp.com/">
                  Live URL
                </a>
              </div>
              <div className="proj-6">
                <div className="img__container"></div>
                <a href="https://github.com/TaaniBravo/17-Workout-Tracker">
                  GitHub Repo
                </a>{" "}
                |{" "}
                <a href="https://daily-fitness-tracker.herokuapp.com/">
                  Live URL
                </a>
              </div>
            </div>
          </GridItem>
          <GridItem id="skillset">
            <div className="skillset__container">
              <h1>Current Languages</h1>
              <h3>And my skill level.</h3>
              <br />
              <div className="sub-container">
                <ul className="language__icons">
                  <li>
                    <i className="fab fa-html5"></i> HTML: Strong
                  </li>
                  <li>
                    <i className="fab fa-js-square"></i> JS: Strong
                  </li>
                  <li>
                    <i className="fab fa-css3-alt"></i> CSS: Okay
                  </li>
                  <li>
                    <i className="fab fa-sass"></i> SCSS: Okay
                  </li>
                  <li>
                    <i className="fas fa-database"></i> SQL and NoSQL: Strong
                  </li>
                  <li>
                    <i className="fab fa-react"></i> ReactJS: Weak
                  </li>
                </ul>
              </div>
              <br />
              <h3>Currently working towards improvement...</h3>
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

export default Portfolio;
