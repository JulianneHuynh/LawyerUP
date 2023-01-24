import "./App.css";

import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";

function App() {

  return (

    <>

      <Header />

      <div id="app-body">

        <Switch>
          
          <Route path="/signin">
            {/* <SignIn /> */}
          </Route>

          <Route path="/account-center">
            {/* <AccountCenter /> */}
          </Route>

          <Route path="/appointment-center">
            {/* <AppointmentCenter /> */}
          </Route>


          <Route path="/messaging-center">
            {/* <MessagingCenter /> */}
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </div>

  </>

  );
};

export default App;