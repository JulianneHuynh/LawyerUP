import React, {useState} from 'react'
import { useHistory } from 'react-router'

function SignIn() {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] =usuState([])
    const history = useHistory()

    const {email, password} = 
    
    function onSubmit(e){
        e.preventDefault()
        const user = {
            email, 
            password
        }
        // signs user in 
        fetch(`/signin`, {
            method:'POST',
            header:{'Content-Type': 'application/json'}, 
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    history.push(`/users/${user.id}`)
                    updateUser(user)
                })
            }else {
                res.json().then(json => setErrors(json.error))
            }
        })
    }

    const handleChange = (e) => {
        const { email, value } = e.target
        setFormData({...formData, [email]:value })
    }
    return (
        <>
        <Form onSubmit={onSubmit}>
        <label>
        Email
        </label>
        <input type='text' name='email' value={email} onChange={handleChange} />
        
        <label>
        Password
        </label>
        <input type='text' name='password' value={password} onChange={handleChange} />

        <input type='submit' value="Sign In!" />
        </Form>
        {errors&&<div>{errors}</div>}
        </>
    );
};

export default SignIn;