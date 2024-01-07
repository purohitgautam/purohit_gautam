import React from 'react'
import{BsGithub, BsInstagram, BsWhatsapp, BsLinkedin} from 'react-icons/bs'
import{BiLogoGmail} from 'react-icons/bi'

export default function Contact() {



  return (
    <div className='contacts'>
      <div className="contact-items">
        <div className="contact-item">
          <div className='contact-icons'>
            <BsWhatsapp size={50} color='#3DCF44' />
          </div>
          <span>+91 9081317874</span>
        </div>
        <div className="contact-item">
          <div className='contact-icons'>
            <BiLogoGmail size={50} color='#EA4335' />
          </div>
          <span>thegautampurohit</span>
        </div>
        <div className="contact-item" onClick={()=>window.open('https://www.linkedin.com/in/purohit-gautam', '_blank')}>
          <div className='contact-icons'>
            <BsLinkedin size={50} color='#0A66C2' />
          </div>
          <span>gautam purohit</span>
        </div>
        <div className="contact-item" onClick={()=>window.open('https://www.instagram.com/purohit_gautam/', '_blank')}>
          <div className='contact-icons'>
            <BsInstagram size={50} color='#C32F87' />
          </div>
          <span>@purohit_gautam</span>
        </div>
        <div className="contact-item" onClick={()=>window.open('https://github.com/Purohitgautam', '_blank')}>
          <div className='contact-icons'>
            <BsGithub size={50} className='contact-icon' />
          </div>
          <span>Purohitgautam</span>
        </div>
      </div>
    </div>
  )
}
