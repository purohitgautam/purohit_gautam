import React from 'react'

export default function Home() {
  return (
    <div>
        <div className="home">
          <div className="profile">
            <div>
              <div className="image">
                <img src={require('./images/gautam_purohit.jpg')} alt="profileImg" width={200} height={200} style={{borderRadius: '50%', objectFit: 'contain'}}/>
              </div>
              <div className="profession">
                  <span>React.js Frontend</span>
                  <span>Web Developer</span>
              </div>
            </div>
            <span className="name">
              hii, i'm Gautam Purohit. A Passionate Front-end React<br/> Developer based in Surat, Gujarat
            </span>
          </div>
          <div className="skills">
            <div>
              <span>Tech Stacks</span>
              <span className='stack'>|</span>
            </div>
            <div>
              <img src={require('./images/html-logo.png')} alt="HTML" />
              <img src={require('./images/css-logo.png')} alt="CSS" />
              <img src={require('./images/javaScript-logo.png')} alt="javaScript" />
              <img src={require('./images/react-logo.png')} alt="react.js" />
            </div>
          </div>
        </div>
    </div>
  )
}
