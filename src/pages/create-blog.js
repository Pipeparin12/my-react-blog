import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/scss/_blog.scss'

export default function CreateBlog() {
    return(
        <main className="blog-container">
        <section className="blog-content">

            <div className="title">
              <textarea className="edit-area" id="" cols="50" rows="1"></textarea>
            </div>
            
              <div className="input-img">
              <textarea className="edit-area" id="" cols="60" rows="1"></textarea>
              </div>

              <div className="blog-text">
                <textarea className="edit-area" id="" cols="200" rows="10"></textarea>
              </div>

              <div className="delete-info">
                <Link to="/home">
                  <button>Delete Blog</button> 
                </Link>
              </div>

              <div className="edit-info">
                <Link to="/blog">
                  <button>Submit</button> 
                </Link>
              </div>
          </section> 
      </main>   
    )
}