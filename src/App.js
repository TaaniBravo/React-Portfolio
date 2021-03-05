import "./App.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact/index";
import Home from "./pages/Home/index";
import Projects from "./pages/Projects/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "animate.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header>
          <Navbar />
        </Header>
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route exact strict path="/projects" component={Projects} />
          <Route exact strict path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
