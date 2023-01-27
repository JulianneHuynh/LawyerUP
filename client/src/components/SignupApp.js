import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom"

import SignupClient from "./SignupClient";
import SignupLawyer from "./SignupLawyer";

function SignupApp() {
  const navigate = useNavigate();

  
  // const [page, setPage] = useState("/")

  return (
    <div>
        <h1> Sign Up as a Client or Lawyer!</h1>
        <br />
        <button onClick={() => navigate('/SignupClient')}> Client </button>
        <br /> 
        <button onClick={() => navigate('/SignupLawyer')}> Lawyer </button>
    </div>


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