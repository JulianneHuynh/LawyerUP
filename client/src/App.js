import "./App.css";

import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import MessagingCenter from "./components/MessagingCenter";
import AccountCenter from "./components/AccountCenter";
import AppointmentCenter from "./components/AppointmentCenter";
import LawyerProfile from "./components/LawyerProfile";
import SignIn from "./components/SignIn";

function App() {

  const [selectedLawyer, setSelectedLawyer] = useState(0);
  const [lawyers, setLawyers] = useState([]);
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([])

// id user is set to state it'll help with conditional rendering
// if user is in state than the rest of the navigation will load
// if user isnt in session 
  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setUser(user)
          fetchAppointment()
      })
    }else {
      res.json().then(() =>setUser(null))
    }
    })
  },[])

  const fetchAppointment = () => {
    fetch('/appointments')
    .then(res => {
      if(res.ok){
        res.json().then(setAppointments)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

const addAppointment = (appointment) => setAppointments(current => [...current,appointment])

const updateAppointment = (updatedAppointment) => setAppointments(current => {
  return current.map(appointment => {
   if(appointment.id === updatedAppointment.id){
     return updatedAppointment
   } else {
     return Appointment
   }
  })
})

if(errors) return <h1>{errors}</h1>
if(!user) return(
  <>
  <GlobalStyle/>
  <SignIn updatedUser={updateUser}/>
  </>
)

// need to route for addAppointment
// update Appointment 

/* <Switch>
<Route  path='/appointments/create'>
        <ProductionForm addAppointment={addAppointment}/>
      </Route>
    {/* TODO make edit component */
    //}
      // <Route  path='/appointments/:id/patch'>
      //   <EditProductionForm updateAppointment={updateAppointment}/>
      // </Route> 


  // useEffect(() => {
  //   fetch('/appointmens')
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(setAppointments)
  //     }else {
  //       res.json().then(data => setErrors(data.error))
  //     }
  //   })
  // },[])
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