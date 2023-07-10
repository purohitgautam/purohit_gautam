import React from 'react'

export default function Contact() {



  return (
    <div className='contacts'>
      <div className="contact-items">
        <div className="contact-item">
          <img src={require('./images/WhatsApp-Logo.png')} alt="WhatsApp" />
          <span>+91 9081317874</span>
        </div>
        <div className="contact-item">
          <img src={require('./images/Gmail-Logo.png')} alt="Gmail" />
          <span>thegautampurohit</span>
        </div>
        <div className="contact-item" onClick={()=>window.open('https://www.linkedin.com/in/gautam-purohit-027417207', '_blank')}>
          <img src={require('./images/LinkedIn-Logo.png')} alt="LinkedIn" />
          <span>gautam purohit</span>
        </div>
        <div className="contact-item" onClick={()=>window.open('https://www.instagram.com/purohit_gautam/', '_blank')}>
          <img src={require('./images/Instagram-Logo.png')} alt="Instagram" />
          <span>@purohit_gautam</span>
        </div>
        <div className="contact-item" onClick={()=>window.open('https://github.com/Purohitgautam', '_blank')}>
          <img src={require('./images/GitHub-Logo.png')} alt="Github" />
          <span>Purohitgautam</span>
        </div>
      </div>
    </div>
  )
}
