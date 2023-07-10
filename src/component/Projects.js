import React from 'react'
import Project from './Project'

export default function Projects() {
  
  return (
    <section className="projects">

      <Project
       image={require('./images/purohitSocial-image.png')}
       name={'Purohit-Store'}
       description={<><p>Welcome to our project-based e-commerce app, designed to simulate an online shopping experience for educational purposes. Our app provides a platform for users to explore and interact with a variety of products, simulating the process of browsing and selecting items for purchase. Using our e-commerce app, users can navigate through different product categories, view product details, and add items to their virtual shopping cart.</p> <p> Although the app does not support actual purchases, it allows users to simulate the process of selecting and managing products as if they were making real transactions.</p></>}
       language={'react.js'}
       styling={'CSS'}
       projectCode={'https://github.com/purohitgautam/purohit-store'}
       liveDemo={'https://purohit-store.netlify.app/'}
      />
            
      <Project
       image={require('./images/newsBreak-image.png')}
       name={'Purohit-News'}
       description={<><p>Stay informed and up-to-date with our comprehensive news app. Designed to deliver the latest headlines from around the United States, India, Australia, Belgium, Bulgaria, canada, China, colombia and cuba. Our app ensures that you never miss a beat.</p> <p>With a sleek and user-friendly interface, our news app provides a seamless browsing experience. Explore a wide range of categories including General, Business, Technology, Science, Sports and Health. Customize your news feed to prioritize the topics that matter most to you.</p></>}
       language={'react.js'}
       styling={'CSS'}
       projectCode={'https://github.com/purohitgautam/news_break'} 
       reverseRow={'row-reverse'}
       liveDemo={'https://purohitgautam.netlify.app/projects/nodemo'}
      />
    </section>
  )
}
