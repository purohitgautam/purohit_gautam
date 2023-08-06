import React from 'react'
import Project from './Project'

export default function Projects() {
  
  return (
    <section className="projects">

      <Project
       image={require('./images/purohitSocial-image.png')}
       name={'Purohit Store'}
       description={"This is project-based e-commerce app, designed to simulate an online shopping experience. Using our e-commerce app, users can navigate through different product categories, view product details, and add items to their virtual shopping cart."}
       language={'react.js'}
       styling={'CSS'}
       projectCode={'https://github.com/purohitgautam/purohit-store'}
       liveDemo={'https://purohit-store.netlify.app/'}
       liveDemoStyle={{width: '30px', height: '30px'}}
       githubStyle={{width: '30px', height: '30px'}}
      />
            
      <Project
       image={require('./images/news-break.png')}
       name={'news break'}
       description={"Stay informed and up-to-date with our comprehensive news app. Designed to deliver the latest headlines from around the many countries. Explore a wide range of categories including General, Business, Technology, Science, Sports and Health."}
       language={'react.js'}
       styling={'CSS'}
       projectCode={'https://github.com/purohitgautam/news_break'} 
       reverseRow={'row-reverse'}
       liveDemoStyle={{display: 'none'}}
       githubStyle={{width: '30px', height: '30px'}}
      />
            
      <Project
       image={require('./images/Mustacchio-Barbershop.png')}
       name={'Mustacchio-Barbershop'}
       description={"Mustacchio-Barbershop is a Project based barber-shop website, Designed to deliver information of shop. This website fully responsive and user friendly"}
       language={'javaScript'}
       styling={'CSS'}
       projectCode={'https://github.com/purohitgautam/Mustacchio-Barbershop'}
       liveDemo={'https://mustacchio-barbershop.netlify.app'}
       liveDemoStyle={{width: '30px', height: '30px'}}
       githubStyle={{width: '30px', height: '30px'}}
      />
    </section>
  )
}
