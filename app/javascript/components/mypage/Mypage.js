import React from 'react'
import Header from '../Layout/Header'

const Mypage = () => {
    return (
        <div>
         <Header />
         <div className="mypage">
          <h2>About Ao Honda</h2>
          <h3>_________________________</h3>
          <p>HTML/CSS/JavaScript/React.js/Node.js/PHP/Ruby on Rails</p>
          <div className="mypage-content">
              <p>Ao Honda has been a freelancer, worked for a company and has run his own business, but he discovered that his real passion is teaching web development & programming in a simple and understandable way. He now runs the Traversy Media YouTube channel and produces online courses</p>
              <p>Ao Honda has been a freelancer, worked for a company and has run his own business, but he discovered that his real passion is teaching web development & programming in a simple and understandable way. He now runs the Traversy Media YouTube channel and produces online courses</p>
              <p>Ao Honda has been a freelancer, worked for a company and has run his own business, but he discovered that his real passion is teaching web development & programming in a simple and understandable way. He now runs the Traversy Media YouTube channel and produces online courses</p>
              <button>Contact me</button>
          </div>
         </div>
         <div className="contact">
            <div className="contact-card">
                <h3>GET IN TOUCH</h3>
                <hr />
                <div className="field">
                 <div className="field-left">
                     <label>Name</label>
                     <input className="field-input" />
                 </div>
                 <div className="field-right">
                     <label>Email</label>
                     <input className="field-input" />
                 </div>
                </div>
                <div className="field">
                    <input className="field-input" />
                </div>
                <div className="field">
                    <textarea className="field-input" rows="6"></textarea>
                </div>
                <button>SEND MESSAGE</button>
            </div>
         </div>   
        </div>
    )
}

export default Mypage
