import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';

function SignIn({
    user,
    setUser
}) {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    
    function onSubmit(e){
        e.preventDefault()
        const formData = {
            "email": email, 
            "password": password
        };
        // signs user in 
        fetch('/signin', {
            method:'POST',
            header:{'Content-Type': 'application/json'}, 
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user);
                    // history.push("/");
                })
            } else {
                res.json().then(json => setErrors(json.error))
            };
        });
    };

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)}>
                <label>
                    Email
                </label>
                <input type='text' placeholder="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <label>
                    Password
                </label>
                <input type='text' placeholder="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <input type='submit' value="Sign In!" />
            </form>
                {errors&&<div>{errors}</div>}
        </>
    );
};

export default SignIn;