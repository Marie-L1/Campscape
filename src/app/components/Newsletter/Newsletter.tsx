import React from 'react'
import "./Newsletter.scss"

 const Newsletter = () => {
  return (
    <div className="newsletter">
      <label className="newsletter__label">Subscribe to our newsletter</label>
      <form className="newsletter__form">
        <input className="newsletter__input" type="text" placeholder="Enter your email" />
        <button className="newsletter__btn">Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter;