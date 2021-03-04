import "./App.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "animate.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header>
          <Navbar />
        </Header>
        <Switch>
          <Route exact strict path="/" component={Portfolio} />
          <Route exact strict path="/projects" component={Projects} />
          <Route exact strict path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
