import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Header";
import Home from "./Home";
import { Switch , Route, Redirect } from "react-router-dom";
import Footer from "./Footer";
import Carddata from "./Components/Carddata.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Terms from "./Components/Terms.js";
import Policy from "./Components/Policy.js";
import Merchandisecard from "./Components/Merchandisecard.js";
import Artistprofile from "./Components/Artistprofile.js";
import Loginmodal from "./Components/Loginmodal";
import Registermodal from "./Components/Registermodal";
import Homemerchandise from "./Components/Homemerchandise";
import Homeartwork from "./Components/Homeartwork";

const App = () => {
  return (
    <div>
      <Header />
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/merchandise" component={ Homemerchandise } />
            <Route exact path="/artwork" component={Homeartwork} />
            <Route exact path="/t-shirts" component={ Merchandisecard } />
            <Route exact path="/lounge-tshirts" component={ Merchandisecard } />
            <Route exact path="/profile" component={ Artistprofile } />
            <Route exact path="/card-data" component={ Carddata } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/contact" component={ Contact } />
            <Route exact path="/terms" component={ Terms } />
            <Route exact path="/policy" component={ Policy } />
            <Route exact path="/login" component={ Loginmodal } />
            <Route exact path="/register" component={ Registermodal } />
            <Redirect to="/" />
        </Switch>
      <Footer />
    </div>
      );
};

export default App;
