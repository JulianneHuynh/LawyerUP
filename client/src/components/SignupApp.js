import { Link } from "react-router-dom";

function SignupApp({
  handleCloseAccountInfo
}) {

  return (
    <>
      <div className="sign-up-form-container">
          <h5> Sign Up as a Client or Lawyer!</h5>
          <br />
          <Link to="/sign-up-client">
            <button onClick={() => handleCloseAccountInfo()}> Client </button>
          </Link>
          <br /> 
          <Link to="/sign-up-lawyer">
            <button onClick={() => handleCloseAccountInfo()}> Lawyer </button>
          </Link>
      </div>
    </>
  );
}

export default SignupApp;