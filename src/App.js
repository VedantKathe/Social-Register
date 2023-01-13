import HomePage from"./components/HomePage";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import './App.css';

export const config = {
  endpoint: `https://panorbit.in/api/users.json`
};

function App() {
  return (
    <React.StrictMode>
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/:id">
        <HomePage />
      </Route>
    </Switch >
  </React.StrictMode >
  );
}

export default App;
