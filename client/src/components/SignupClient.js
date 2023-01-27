import React,  {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Form from "react-bootstrap/Form";
// import {Form} from '../styled/Form'

function SignupClient({
  setUser
}) {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(Date.now());
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [location, setLocation] = useState("");

  function onSubmit(e){
    e.preventDefault()
    const client = {
      name,
      email, 
      dateOfBirth, 
      address,
      location,
      password,
      profilePicture 
    }

      console.log(JSON.stringify(client));

    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(client)
    })
    .then(res => {
      if(res.ok){
        res.json().then(client => {
          setUser(client)
        })
      } else {
        res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    })

  }

  return (
    <>
    <Form onSubmit={onSubmit}>

      <label>
        Name
      </label>
      <input placeholder='John Doe' type='text' value={name} onChange={(e) => setName(e.target.value)} />

      <label>
        Email
      </label>
      <input placeholder='JohnDoe123@gmail.com' type='text' value={email} onchange={(e) => setEmail(e.target.value)} />

      <label>
        Password
      </label> 
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>
        Date of Birth
      </label>
      <input placeholder='Address' type='date' value={dateOfBirth} onchange={(e) => setAddress(e.target.value)} />

      <label>
        Address
      </label>
      <input placeholder='Address' type='text' location='location' value={address} onchange={(e) => setAddress(e.target.value)} />

      <label>
        Profile Picture
      </label>
      <input placeholder='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/2880px-Red_Panda_%2824986761703%29.jpg' type='text' value={profilePicture} onchange={(e) => setProfilePicture(e.target.value)} />

      <input type='submit' value ='Sign Up!' />
    </Form>
    {errors&&<div>{errors}</div>}
    </>
  )
}

export default SignupClient;
