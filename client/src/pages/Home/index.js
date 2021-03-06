import Main from "../../components/Main/index";
import GridContainer from "../../components/GridContainer/index";
import GridItem from "../../components/GridItem/index";
import profilePic from "../../images/supremetee-cropped.jpg";
import "./style.scss";

const Home = () => {
  return (
    <div>
      <Main>
        <GridContainer className="grid__home">
          <GridItem id="home">
            <h2 className="heading-1 animate__animated animate__rotateInDownLeft animate__slow">
              &#123; Dream, Develop, Create &#125;
            </h2>
            <h3 className="heading-2"> Full-Stack Developer, </h3>
            <h1 className="heading-3"> Taani Maama</h1>
          </GridItem>
          <GridItem id="profile-pic">
            <div className="img__container profile-pic animate__animated animate__fadeInRight animate__slower animate__delay-1s">
              <img src={profilePic} alt="Taani Maama" />
            </div>
          </GridItem>
          <GridItem id="about">
            <p className="bio__container">
              Started his coding journey in Sept. 2020. He continuously grows at
              an exponential rate, learning new techniques and practices in his
              pursuit to be an amazing developer. Coming out of UW's Coding
              Bootcamp he has a strong foundational knowledge of HTML, CSS,
              JavaScript, SQL, MERN, JQuery and more. His background as a
              professional project manager, and leading teams in high stress
              environments in past careers has helped him build a solid
              foundation for his mindful yet competitive approach.
            </p>
          </GridItem>
        </GridContainer>
      </Main>
    </div>
  );
};

export default Home;
