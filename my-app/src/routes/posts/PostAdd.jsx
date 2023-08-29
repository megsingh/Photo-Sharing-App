import React, { useState } from 'react'
import axios from 'axios'

import "../../assets/styles/post__add.css"

function PostAdd() {
  const [post, setPost] = useState({
    name: "",
    location: "",
    likes: 0,
    description: "",
    date: "",
    PostImage: ""
  })

  const onSubmit = (e) => {
    e.preventDefault();
    const postData = {
      name: post.name,
      location: post.location,
      likes: post.likes,
      description: post.description,
      date: post.date,
      PostImage: post.PostImage
    };
    console.log(postData);
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("token")
      }
    }
    axios.post("https://shielded-river-28747.herokuapp.com/posts", postData, config)
      .then(res => {
        console.log(res);
        window.location.href = "/posts";
      })
      .catch(err => console.log(err)
      );
  };

  const onChange = (e) => {
    let files = e.target.files
    // console.warn("data file", files);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setPost({
        ...post,
        PostImage: e.target.result
      });
    }

  }

  return (
    <div className='post__add'>

      <form noValidate onSubmit={onSubmit}>
        <div>
          <label className='add__label' htmlFor="name">Name</label>
          <input className='add__input'
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            value={post.name}
            id="name"
            type="text"
          />

        </div>

        <div>
          <label className='add__label' htmlFor="locatioon">Location</label>
          <input className='add__input'
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            value={post.location}
            id="location"
            type="text"
          />

        </div>


        <div>
          <label className='add__label' htmlFor="description">Description</label>
          <textarea className='add__input' rows="2" cols="20"
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            value={post.description}
            id="description"
            type="text"
          />

        </div>

        <div>
          <label className='add__label' htmlFor="email">Date</label>
          <input className='add__input'
            onChange={(e) => setPost({ ...post, date: e.target.value })}
            value={post.date}
            id="date"
            type="number"
          />

        </div>

        <div>
          <label className='add__label' htmlFor="email">Browse File</label>
          <input className='add__input'
            onChange={(e) => onChange(e)}
            // value={post.PostImage}
            id="PostImage"
            type="file"
          />

        </div>


        <div className='add__submit'>
          <button className='add__button' type="submit">Add Post</button>
        </div>
      </form>
    </div>
  )
}

export default PostAdd