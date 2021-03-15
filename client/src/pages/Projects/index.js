import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";
import Main from "../../components/Main";
import ProjectItem from "../../components/ProjectItem";
import trailChasers from "../../images/tinified/trailchasers.png";
import budgetTracker from "../../images/tinified/budgettracker.png";
import eatDaBurger from "../../images/tinified/eat-da-burger.png";
import oneWorldAcademy from "../../images/tinified/oneworldacademy.png";
import teamBase from "../../images/tinified/teambase.png";
import fitnessTracker from "../../images/tinified/fitness-tracker.png";
import "./style.scss";

const Projects = () => {
  return (
    <div>
      <Main>
        <GridContainer className='grid__proj'>
          <GridItem id='proj-header'>
            <h1>Projects</h1>
          </GridItem>
          <GridItem id='projects'>
            <p className='note'>*Hover over images for links and details*</p>

            <div className='projects__container'>
              <ProjectItem
                projNum={1}
                title={"One World Academy LMS"}
                image={oneWorldAcademy}
                github={"https://github.com/TaaniBravo/One-World-Academy"}
                liveUrl={"https://oneworldacademy.herokuapp.com/"}
              />
              <br />
              <ProjectItem
                projNum={2}
                title={"Trail Chasers Hiking App"}
                image={trailChasers}
                github={"https://github.com/TaaniBravo/Trail-Chaser-Hiking-App"}
                liveUrl={
                  "https://taanibravo.github.io/Trail-Chaser-Hiking-App/"
                }
              />
              <br />
              <ProjectItem
                projNum={3}
                title={"Eat Da Burger"}
                image={eatDaBurger}
                github={"https://github.com/TaaniBravo/13-Eat-Da-Burger"}
                liveUrl={"https://eat-da-burger-or-else.herokuapp.com/"}
              />
              <br />
              <ProjectItem
                projNum={4}
                title={"TeamBase: Employee Directory"}
                image={teamBase}
                github={"https://github.com/TaaniBravo/19-Employee-Directory"}
                liveUrl={"https://teambase-directory.herokuapp.com/"}
              />
              <br />
              <ProjectItem
                projNum={5}
                title={"IndexDB Budget Tracker"}
                image={budgetTracker}
                github={
                  "https://github.com/TaaniBravo/Online-Offline-Budget-Trackers"
                }
                liveUrl={"https://on-n-offline-budget.herokuapp.com/"}
              />
              <br />
              <ProjectItem
                projNum={6}
                title={"Daily Fitness Tracker"}
                image={fitnessTracker}
                github={"https://github.com/TaaniBravo/17-Workout-Tracker"}
                liveUrl={"https://daily-fitness-tracker.herokuapp.com/"}
              />
            </div>
          </GridItem>
          <GridItem id='skillset'>
            <div className='skillset__container'>
              <h2 className='lang__header'>Current Languages</h2>
              <br />
              <div className='sub-container'>
                <ul className='language__icons'>
                  <li>
                    <i className='fab fa-html5'></i> HTML
                  </li>
                  <li>
                    <i className='fab fa-js-square'></i> JS
                  </li>
                  <li>
                    <i className='fab fa-css3-alt'></i> CSS
                  </li>
                  <li>
                    <i className='fab fa-sass'></i> SCSS
                  </li>
                  <li>
                    <i className='fas fa-database'></i> SQL and NoSQL
                  </li>
                  <li>
                    <i className='fab fa-react'></i> ReactJS
                  </li>
                </ul>
              </div>
              <br />
              <h4>Currently working towards...</h4>
              <div className='sub-container'>
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
