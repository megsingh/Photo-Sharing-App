import React from "react"
import { useState } from "react"

function LoginUser(){
    const [user,setUser] = useState({
        email:"",
        password:"",
        comments:"",
        gender:"Male"
    })
    const handleLoginSubmit = (e) =>{
        e.preventDefault();
        console.log("user: ",user)
        
    }

    return(
        <div>
            <form onSubmit = {handleLoginSubmit}>
                <div>
                <label>Email</label>
                <input type="email" value = {user.email} onChange={(e) => setUser({...user,email:e.target.value})}/>
                </div>

                <div>
                <label>comments</label>
                <textarea value = {user.comments} onChange={(e) => setUser({...user,comments:e.target.value})}/>
                </div>

                <div>
                <label>Password</label>
                <input type = "password" value = {user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                </div>

                <div>
                    <label>Gender</label>
                    <select value={user.gender} onChange = {(e)=>setUser({...user,gender:e.target.value})}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginUser