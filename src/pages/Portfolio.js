import Main from "../components/Main/index";
import GridContainer from "../components/GridContainer/index";
import GridItem from "../components/GridItem/index";

const Portfolio = () => {
  return (
    <div>
      <Main>
        <GridContainer>
          <GridItem id="home">
            <h2 className="heading-1">&#123; Dream, Develop, Create &#125;</h2>
            <h3 className="heading-2"> Full-Stack Developer </h3>
            <h1 className="heading-3"> Taani Maama</h1>
          </GridItem>
          <GridItem>
            <div className="img__container">
              <img src="" alt="" />
            </div>
          </GridItem>
          <GridItem id="about">
            <p className="bio__container">
              Taani Maama is a full-stack web developer, who started his coding
              journey in Sept. 2020. Continuously growing at an exponential
              rate, learning new techniques and practices in his pursuit to be
              an amazing developer. Coming out of UW's Coding Bootcamp he has a
              strong foundational knowledge of HTML, CSS, JavaScript, SQL, MERN,
              JQuery and more technologies he continues to teach himself. His
              background as a professional project manager, and leading teams in
              high stress environments in past careers has helped him build a
              solid foundation for his mindful yet competitive approach.
            </p>
          </GridItem>
          <GridItem id="projects">
            <GridItem>
              <div className="projects__container"></div>
            </GridItem>
            <GridItem>
              <div className="skillset__container">
                <h1>Current Languages</h1>
                <h3>And my skill level.</h3>
                <br />
                <div class="sub-container">
                  <ul class="language__icons">
                    <li>
                      <i class="fab fa-html5"></i> HTML: Strong
                    </li>
                    <li>
                      <i class="fab fa-js-square"></i> JS: Strong
                    </li>
                    <li>
                      <i class="fab fa-css3-alt"></i> CSS: Okay
                    </li>
                    <li>
                      <i class="fab fa-sass"></i> SCSS: Okay
                    </li>
                    <li>
                      <i class="fas fa-database"></i> SQL and NoSQL: Strong
                    </li>
                    <li>
                      <i class="fab fa-react"></i> ReactJS: Weak
                    </li>
                  </ul>
                </div>
                <br />
                <h3>Currently working towards improvement...</h3>
                <div class="sub-container">
                  <ul>
                    <li>Advanced JS Algo thinking.</li>
                    <li>Deep knowledge base of CSS.</li>
                    <li>ReactJS ins and outs.</li>
                  </ul>
                </div>
              </div>
            </GridItem>
          </GridItem>
        </GridContainer>
      </Main>
    </div>
  );
};

export default Portfolio;
