import React,  {useState} from 'react';
// import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function SignupLawyer() {
  const [formData, setFormData] = useState({
      name:'',
      username:'',
      email:'',
      specialty:'',
      law_firm:'',
      alma_mater:'',
      years_in_practice:'',
      address:'',
      password:'',
      date_of_birth:'',
      profile_picture:'',
      board_certification:''
  });

  const [errors, setErrors] = useState([]);
  // const history = useHistory();

  const {name, username, email, specialty, law_firm, alma_mater, years_in_practice, location, password, address, date_of_birth, profile_picture, board_certification} = formData;

  function onSubmit(e) {
    e.preventDefault();
    const lawyer = {
      name,
      username,
      email, 
      specialty,
      law_firm,
      alma_mater,
      years_in_practice,
      address,
      password,
      date_of_birth,
      profile_picture,
      board_certification
    };

    fetch(`/lawyers`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(lawyer)
    })
    .then(res => {
      if(res.ok){
        res.json().then(lawyer => {
          // history.push(`/lawyers/${lawyer.id}`)
        })
      }else {
        res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    })

  }

  const handleChange = (e) => {
    const { username, value } =e.target
    setFormData({ ...formData, [username]: value})
  }
  return (
    <div className="sign-up-form-container">
      <Form onSubmit={onSubmit}>

        <label>
          Name
        </label>
        <input placeholder='Jane Doe'  type='text' legal_name='name' value={name} onChange={handleChange} />

        <label>
          Username 
        </label>
        <input placeholder='janedoe123' type='text' legal_name='username' value={username} onChange={handleChange} />

        <label>
          Email
        </label>
        <input placeholder='janedoe123@gmail.com' type='text' email='email' value={email} onchange={handleChange} />

        <label>
          Specialty
        </label>
        <input type='text' specialty='specialty' value={specialty} onchange={handleChange} />

        <label>
          Law Firm
        </label>
        <input placeholder='Akerman LLP' type='text' law_firm='law_firm' value={law_firm} onchange={handleChange} />

        <label>
          Alma Mater
        </label>
        <input placeholder='New York University' type='text' alma_mater='alma_mater' value={alma_mater} onchange={handleChange} />

        <label>
          Years of Experience
        </label>
        <input type='text' years_in_practice='years_in_practice' value={years_in_practice} onchange={handleChange} />

        <label>
          Location
        </label>
        <input placeholder='Zip Code' type='text' location='location' value={location} onchange={handleChange} />

        <label>
          Password
        </label> 
        <input type='text' password='password' value={password} onChange={handleChange} />

        <input type= 'submit' value ='Sign Up!' />
      </Form>
    {errors&&<div>{errors}</div>}
    </div>
  )
}

export default SignupLawyer;