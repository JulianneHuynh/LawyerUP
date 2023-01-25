import React,  {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import {Form} from '../styled/Form'

function SignupClient() {
  const [formData, setFormData] = useState({
      name:'',
      username:'',
      email:'',
      location:'',
      password:'',
  })
  const [errors, setErrors] = useState([])
  const history = useHistory()

  const {name, username, email, location, password} = formData

  function onSubmit(e){
    e.preventDefault()
    const client = {
      name,
      username,
      email, 
      location,
      password 
    }

    fetch(`/clients`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(client)
    })
    .then(res => {
      if(res.ok){
        res.json().then(client => {
          history.push(`/clients/${client.id}`)
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
    <>
    <Form onSubmit={onSubmit}>

      <label>
        Name
      </label>
      <input placeholder='John Doe' type='text' legal_name='name' value={name} onChange={handleChange} />

      <label>
        Username 
      </label>
      <input placeholder='JohnDoe123' type='text' legal_name='username' value={username} onChange={handleChange} />

      <label>
        Email
      </label>
      <input placeholder='JohnDoe123@gmail.com' type='text' email='email' value={email} onchange={handleChange} />

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
    </>
  )
}

export default SignupClient;