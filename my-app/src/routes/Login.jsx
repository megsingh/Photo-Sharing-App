import React from 'react'
import {Link,useHistory } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import loginlogo from "../Images/loginlogo.jpg"
import "../assets/styles/Login.css"

function Login() {

  const history= useHistory()

  const [user, setUser] = useState({
    email: "",
    password: "",
  })


  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: user.email,
      password: user.password
    };
    
    axios.post("https://shielded-river-28747.herokuapp.com/login", userData ,{
      headers:{
          "Content-Type":"application/json"
      }
    }).then(res => {
      console.log(res);
      const token = res.data.Token
      const userData = res.data.User.name
      console.log("setting local storage");
      localStorage.setItem('token',token)
      localStorage.setItem('user',userData)
      window.location.href = "/posts";
      })
      .catch(err => console.log(err)
      );
  };

  return (
    <div className='login__main'>
      <div className='login__left'>
        <img className='logo' src={loginlogo} alt="logo" />
      </div>

        <div className='login__right'>
          <div className = "login__header">
            <h4 className='login__title'>
              <b>Login</b> to your account
            </h4>
            
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div>
            <label className='form__label' htmlFor="email">Email</label>
              <input className='form__input'
                onChange={(e) => setUser({...user,email:e.target.value})}
                value={user.email}
                id="email"
                type="email"
              />
              
            </div>
            <div>
            <label className='form__label' htmlFor="password">Password</label>
              <input className='form__input'
                onChange={(e) => setUser({...user,password:e.target.value})}
                value={user.password}
                // error={state.errors.password}
                id="password"
                type="password"
              />
              
            </div>
            <div className='submit'>
              <button className='form__button' type="submit">Login </button>
            </div>
          </form>
          <p className='login__subtitle'>
              Don't have an account? <Link to="/register" className='button'>Sign Up</Link>
            </p>
        </div>
    </div>
  );
}

export default Login

