import React,  {useState} from 'react';
// import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function SignupLawyer({
  apiKey,
  setUser
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [lawFirm, setLawFirm] = useState("");
  const [almaMater, setAlmaMater] = useState("");
  const [boardCertification, setBoardCertification] = useState("");

  const [errors, setErrors] = useState([]);
  const [location, setLocation] = useState("");

  function fetchCoords(rawValue) {
      const formatted = encodeURIComponent(rawValue);

      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formatted}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
          setLocation(data["results"][0]["geometry"]["location"]);
      });
  };

  function onSubmit(e) {
    e.preventDefault();
    const lawyer = {
      "name": name,
      "email": email, 
      "date_of_birth": dateOfBirth, 
      "address": address,
      "location": location,
      "password": password,
      "profile_picture": profilePicture,
      "specialty": specialty,
      "law_firm": lawFirm,
      "alma_mater": almaMater,
      "board_certification": boardCertification,
      "is_lawyer?": true
    };

      console.log(JSON.stringify(lawyer));
      fetchCoords(address);
      console.log(JSON.stringify(lawyer));

    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(lawyer)
    })
    .then(res => {
      if(res.ok){
        res.json().then(lawyer => {
          setUser(lawyer);
          localStorage.setItem('user', lawyer);
        })
      }else {
        res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    })

  }

  return (
    <div className="sign-up-form-container">
      <Form onSubmit={onSubmit}>

      <label>
        Name
      </label>
      <input placeholder='John Doe' type='text' value={name} onChange={(e) => setName(e.target.value)} />

      <label>
        Email
      </label>
      <input placeholder='JohnDoe123@gmail.com' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>
        Password
      </label> 
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>
        Date of Birth
      </label>
      <input type='date' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />

      <label>
        Address
      </label>
      <input placeholder='Address' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />

      <label>
        Profile Picture
      </label>
      <input placeholder='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/2880px-Red_Panda_%2824986761703%29.jpg' type='text' value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />

        <label>
          Specialty
        </label>
        <input type='text' specialty='specialty' value={specialty} onChange={(e) => setSpecialty(e.target.value)} />

        <label>
          Law Firm
        </label>
        <input placeholder='Akerman LLP' type='text' value={lawFirm} onChange={(e) => setLawFirm(e.target.value)} />

        <label>
          Alma Mater
        </label>
        <input placeholder='New York University' type='text' value={almaMater} onChange={(e) => setAlmaMater(e.target.value)} />

        <label>
           Board Certification
        </label>
        <input type='text' value={boardCertification} onChange={(e) => setBoardCertification(e.target.value)} />

        <input type= 'submit' value ='Sign Up!' />
      </Form>
    {errors&&<div>{errors}</div>}
    </div>
  )
}

export default SignupLawyer;
