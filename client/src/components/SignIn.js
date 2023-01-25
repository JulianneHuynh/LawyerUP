import React, {useState} from 'react'
import { useHistory } from 'react-router'

function SignIn() {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    const [errors, setErrors] =usuState([])
    const history = useHistory()

    const {username, email, password} = 
    
    function onSubmit(e){
        e.preventDefault()
        const user = {
            username, 
            password
        }
        
        fetch(`/signin`, {
            method:'POST',
            header:{'Content-Type': 'application/json'}, 
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    history.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(json.error))
            }
        })
    }

    const handleChange = (e) => {
        const { username, value } = e.target
        setFormData({...formData, [username]:value })
    }
    return (
        <>
        <Form onSubmit={onSubmit}>
        <label>
        Username
        </label>
        <input type='text' name='username' value={username} onChange={handleChange} />
        
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