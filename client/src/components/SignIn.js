import { useState } from 'react';

function SignIn({
    setUser
}) {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    
    function onSubmit(e){
        e.preventDefault();
        const formData = {
            "email": email, 
            "password": password
        };
        // signs user in 
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(formData),
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user);
                    localStorage.setItem('user', user);
                    // history.push("/");
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            };
        });
        console.log(formData);
    };

    return (
        <div className="sign-up-form-container">
            <form onSubmit={(e) => onSubmit(e)}>
                <label>
                    Email
                </label>
                <input type='text' placeholder="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <label>
                    Password
                </label>
                <input type='password' placeholder="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <input type='submit' value="Sign In!" />
            </form>
                <div>{errors}</div>
        </div>
    );
};

export default SignIn;