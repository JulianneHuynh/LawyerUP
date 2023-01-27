import React,  {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Form from "react-bootstrap/Form";
// import {Form} from '../styled/Form'

function SignupClient({
  setUser
}) {
  const [formData, setFormData] = useState({
      name:'',
      username:'',
      email:'',
      address:'',
      password:'',
  })
  const [errors, setErrors] = useState([]);
  // const history = useHistory()

  const {name, username, email, address, password} = formData

  function onSubmit(e){
    e.preventDefault()
    const client = {
      name,
      username,
      email, 
      address,
      password 
    }

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

  const handleChange = (e) => {
    const { username, value } =e.target
    setFormData({ ...formData, [username]: value})
  }
  return (
    <>
    <Form onSubmit={onSubmit}>

      <label>
        Name
      </label>
      <input placeholder='John Doe' type='text' value={name} onChange={handleChange} />

      <label>
        Username 
      </label>
      <input placeholder='JohnDoe123' type='text' value={username} onChange={handleChange} />

      <label>
        Email
      </label>
      <input placeholder='JohnDoe123@gmail.com' type='text' value={email} onchange={handleChange} />

      <label>
        Location
      </label>
      <input placeholder='Zip Code' type='text' location='location' value={address} onchange={handleChange} />

      <label>
        Password
      </label> 
      <input type='password' value={password} onChange={handleChange} />


      <input type= 'submit' value ='Sign Up!' />
    </Form>
    {errors&&<div>{errors}</div>}
    </>
  )
}

export default SignupClient;