import React from 'react'
import './Testimonials.css'
import AVA1 from '../../assets/avatar1.jpg'
import AVA2 from '../../assets/avatar2.jpg'
import AVA3 from '../../assets/avatar3.jpg'
import AVA4 from '../../assets/avatar4.jpg'

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVA1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Archiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            sapiente quidem natus officiis minus eligendi.
          </small>
        </article>
      </div>
    </section>
  )
}
