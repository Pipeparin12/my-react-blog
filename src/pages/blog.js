import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/scss/_blog.scss'

export default function Blog () {
    return (
      <main className="blog-container">
        <section className="blog-content">

            <div className="title">
              <h2 className="text-title">Angular vs React: The 2021 winner is...</h2>
            </div>

              <img className="img" src="../assets/images/angular_vs_react.png" alt="angular_vs_react.png" />

              <div className="blog-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos nemo facilis expedita debitis animi eligendi explicabo veritatis odio, nihil aliquid cum cumque rem praesentium voluptatem dignissimos error dolorum reprehenderit fuga ex molestias asperiores repellendus laboriosam consequuntur. Ex ad voluptates adipisci recusandae quis porro inventore veritatis nisi explicabo eos, facere similique repellendus saepe assumenda ducimus repudiandae reprehenderit possimus exercitationem nulla quibusdam. Perferendis harum deleniti molestiae suscipit dicta, vero culpa! Quibusdam natus suscipit accusantium cumque doloribus placeat doloremque labore dolorem non quidem vel reiciendis, minima cum possimus unde corrupti eaque quod dolores? Itaque, cumque? Provident aliquid tempora illum, temporibus ab itaque voluptate doloremque iste. Quibusdam distinctio, placeat reprehenderit vel aliquid eligendi ipsam similique laboriosam! Laudantium deserunt impedit reprehenderit laborum doloribus quo voluptates. Voluptatem eveniet omnis facilis deserunt alias nulla hic! Amet mollitia minus sapiente itaque, delectus quod veritatis vitae iure officia laboriosam laborum tenetur odio nostrum. Nulla recusandae tempora tempore praesentium nam cupiditate voluptatem facilis sed atque quaerat sit laudantium aperiam repellat distinctio ipsum, aut saepe, placeat eveniet ipsa doloremque! Qui, itaque? Saepe aliquam adipisci eligendi reiciendis minima corporis, ad fugit tenetur ex, delectus neque officia atque quae inventore quo consequatur quis odit suscipit quibusdam placeat. Magni omnis mollitia vel ut!</p>
              </div>

              <div className="blog-info">
                <h4>Written by : Author</h4>
              </div>

              <div className="edit-info">
                <Link to="/edit-blog">
                  <button>Edit Blog</button>
                </Link>
              </div>

          </section> 
      </main>   
    )
}