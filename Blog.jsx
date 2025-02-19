import React from "react"
import { Heading } from "../common/Heading"
import { blog } from "../data/dummydata"

export const Blog = () => {
  return (
    <>
      <section
        className='blog'
        style={{
          backgroundImage: "url('./images/blog7.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className='container'>
          <Heading title='Blog' />
          <div className='content grid3'>
            {blog.map((item, index) => (
              <div className='box' data-aos='flip-left' key={index}>
                <div className='img' data-aos='fade-up'>
                  <img src={item.cover} alt='' data-aos='fade-down' />
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.title}</h3>
                  <label data-aos='fade-left'>
                    By {item.author} {item.date}
                  </label>
                  <p data-aos='fade-up-right'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}
