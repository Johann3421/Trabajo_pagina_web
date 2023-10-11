import React from 'react'
import './blog.css'

import {BsArrowRightShort} from 'react-icons/bs'

const Blog = () => {
  return (
    <section className='blog container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className='secTitle'>
            Nuestro Mejor Blog?
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="mainContainer grid">
          <div className="singlePost grid">
            <div className="imgDiv">
              <img src="" alt="Image Name" />
            </div>

            <div className="postDetails">
              <h3>
                Title
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>

            <a href="#" className='flex'>
              <BsArrowRightShort className="icon"/>
              Saber Mas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog