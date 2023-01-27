import "./App.css";

import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import MessagingCenter from "./components/MessagingCenter";
import AccountCenter from "./components/AccountCenter";
import AppointmentCenter from "./components/AppointmentCenter";
import LawyerProfile from "./components/LawyerProfile";

function App() {

  const [selectedLawyer, setSelectedLawyer] = useState(0);
  const [lawyers, setLawyers] = useState([]);
  const [user, setUser] = useState([]);

  // const lawyers = [
  //     {
  //         "id": 2,
  //         "location": { "lat": 40.747070, "lng": -73.756290 },
  //         "name": "Idris Elba",
  //         "profile_picture": "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/9166/square_thumb%402x.jpg",
  //         "specialty": "Real Estate Law"
  //     }
  // ];

  useEffect(() => {
    fetch("http://localhost:3000/lawyers")
    .then(res => res.json())
    .then((lawyerArray) => setLawyers(lawyerArray))
  }, [])

  return (

    <>

      <Header />

      <div id="app-body">

        <Switch>
          
          {/* <Route path="/signin">
            <SignIn />
          </Route> */}

          <Route path="/account-center">
            <AccountCenter />
          </Route>

          <Route path="/appointment-center">
            <AppointmentCenter />
          </Route>


          <Route path="/messaging-center">
            <MessagingCenter />
          </Route>

          <Route path="/lawyer">
            <LawyerProfile 
              selectedLawyer={selectedLawyer}
            />
          </Route>

          <Route path="/">
            <Home 
              lawyers={lawyers}
              setSelectedLawyer={setSelectedLawyer}
              user={user}
              setUser={setUser}
            />
          </Route>

        </Switch>

      </div>

  </>

  );
};

export default App;