import React from "react";
import Navbar from "./components/app/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  );
};

export default App;
