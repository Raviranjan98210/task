import React from "react";
import Navbar from "./components/app/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/app/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
