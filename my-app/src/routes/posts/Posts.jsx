import React, { useEffect, useState } from 'react';
import '../../assets/styles/Posts.css'
import camera_icon from "../../Images/camera_icon.jpg"
import axios from "axios"
import { Link } from 'react-router-dom'
import home from "../../Images/home.png"

const Posts = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get(`http://localhost:5000/posts`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(res => {
      console.log("Axios", res.data.posts);
      setPosts(res.data.posts)
    })
  }, [])


  const handleDelete = (id) => {
    const token = localStorage.getItem("token")
    axios.delete(`https://shielded-river-28747.herokuapp.com/posts/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(res => {
      console.log("res", res);
      // setPosts(res.data.posts)
      window.location.href = "/posts";
    })
  }

  const handleEdit = (id)=> {
    console.log("item", id);
    window.location.href = `/posts/edit/${id}`
  }
 
 
 return (
    <div className='post'>
      <header>
        <h1>InstaClone</h1>
        <nav className='header__nav'>
            <Link to="/posts/add">
            <img className="icon" src={camera_icon} alt="camera-icon" />
           </Link>
           <Link to = "/"><img src = {home} className='icon' alt = "home"/></Link>
        </nav>
        
        
      </header>
      <ul className='post__list'>

        {posts.map((item, index) => {
          return (
            <li key={index}>
              <div className='post__container'>
                <div className='post__header'>
                  <div>
                  <label><strong className='user__name'>{item.name}</strong></label>
                  <p className='user__location'>{item.location}</p>
                  </div>
                  <div>
                    <span onClick={() => handleEdit(item._id)} className='post__button'>Edit</span>
                    <span onClick={() => handleDelete(item._id)} className='post__button'>Delete</span>
                  </div>
                </div>

                <div className='post__body'>
                  <img className="user__img" src={item.PostImage} alt="post" />
                  <span className='user__date'>{item.date}</span>
                  <div className='post__description'>
                    <p className='user__likes'>{item.likes} likes</p>
                    <strong className='user__description'>{item.description}</strong>
                  </div>
                </div>

              </div>

            </li>)
        })}
      </ul>

    </div>

  );
}

export default Posts;
