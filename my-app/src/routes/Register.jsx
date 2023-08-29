import React from 'react'
import { useState } from 'react';
import { useHistory, Link } from "react-router-dom"
import axios from "axios"
import "../assets/styles/Login.css"
import loginlogo from "../Images/loginlogo.jpg"

function Register() {
    const history = useHistory()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        // errors: {}
    })

    const onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: user.name,
            email: user.email,
            password: user.password
        };
        console.log(newUser);

        axios.post("https://shielded-river-28747.herokuapp.com/register", newUser)
            .then(res => {
                console.log(res);
                history.push("/")
            }) // re-direct to login on successful register
            .catch(err => console.log(err)
            );
    };



    return (
        <div className='login__main'>
            <div className='login__left'>
                <img className='logo' src={loginlogo} alt="logo" />
            </div>
            <div className='login__right'>
                <div className="login__header">
                    <h4 className='login__title'>
                        <b>Register</b>
                    </h4>

                </div>
                <form noValidate onSubmit={onSubmit}>
                    <div>
                    <label className='form__label'>Name</label>
                        <input className='form__input'
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            value={user.name}
                            id="name"
                            type="text"
                        />
                        
                    </div>
                    <div>
                        <label className='form__label'>Email</label>
                        <input className='form__input'
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            value={user.email}
                            id="email"
                            type="email"
                        />
                    </div>
                    <div>
                        <label className='form__label'>Password</label>
                        <input className='form__input'
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            value={user.password}
                            id="password"
                            type="password"
                        />

                    </div>

                    <div className='submit'>
                        <button className='form__button' type="submit">Sign up</button>
                    </div>
                </form>
                <p className='login__subtitle'>
                    Already have an account? <Link className='button' to="/">Login</Link>
                </p>
            </div>
        </div>

    );
}


export default Register;

