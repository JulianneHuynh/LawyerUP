import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";

import SignupClient from "./SignupClient";
import SignupLawyer from "./SignupLawyer";

function SignupApp() {
  const [page, setPage] = useState("/")

  return (
    <div className="SignupApp">
     <NavBar onChangePage={setPage} />
      <Routes> 
         <Route path="/signupClient" element={<SignupClient/>}/>

         <Route path= "/signupLawyer" element={<SignupLawyer/>}/>
           
         <Route path= "*" element={<h1> Not Found </h1>}/>
        
      </Routes>   
         

    </div>
  );
}

export default SignupApp;