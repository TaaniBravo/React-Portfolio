import Main from "../components/Main/index";
import GridContainer from "../components/GridContainer/index";
import GridItem from "../components/GridItem/index";
import Navbar from "../components/Navbar/index";

const Portfolio = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <Main>
        <GridContainer></GridContainer>
      </Main>
    </div>
  );
};

export default Portfolio;
