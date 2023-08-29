import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./routes/Login.jsx"
import Register from "./routes/Register.jsx";
import Posts from "./routes/posts/Posts.jsx";
import PostAdd from './routes/posts/PostAdd';
import PostEdit from "./routes/posts/PostEdit.jsx"


import LoginUser from "./LoginUser"
function App() {
   // localStorage.removeItem("jwtToken")
    return (
        // <Router>

        //     <Switch>
        //         <Route exact path="/">
        //             <Login />
        //         </Route>
        //         <Route exact path="/register">
        //             <Register />
        //         </Route>
        //         <Route exact path="/posts">
        //             <Posts />
        //         </Route>
        //         <Route exact path="/posts/add/">
        //             <PostAdd />
        //         </Route>
        //         <Route exact path="/posts/edit/:id">
        //             <PostEdit />
        //         </Route>

        //     </Switch>

        // </Router>

        <div>
            <LoginUser></LoginUser>
        </div>
    )
}

export default App;