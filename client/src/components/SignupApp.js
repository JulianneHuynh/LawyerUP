import React, {useState} from 'react';
import { Link } from "react-router-dom";

import SignupClient from "./SignupClient";
import SignupLawyer from "./SignupLawyer";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SignupApp({
  handleCloseAccountInfo
}) {

  return (
    <>
    <div>
        <h1> Sign Up as a Client or Lawyer!</h1>
        <br />
        <button onClick={console.log("hi")}> Client </button>
        <br /> 
        <Link to="/sign-up-lawyer">
          <button onClick={() => handleCloseAccountInfo()}> Lawyer </button>
        </Link>
    </div>

  </>
    // <div className="SignupApp">
    //  <NavBar onChangePage={setPage} />
    //   <div> 
    //      <Route path="/signupClient" element={<SignupClient/>}/>

    //      <Route path= "/signupLawyer" element={<SignupLawyer/>}/>
           
    //      <Route path= "*" element={<h1> Not Found </h1>}/>
        
    //   </Routes>   
         

    // </div>
  );
}

export default SignupApp;