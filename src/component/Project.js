import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {HiOutlineExternalLink} from 'react-icons/hi'

export default function Project({name, image, description, language, styling, projectCode, reverseRow, liveDemo }) {
  return (
    <div className="project" style={{flexDirection: reverseRow}}>
        <div className="image">
        <img src={image} alt="projectImage" />
        </div>
        <div className="description">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="tech-used">
            <span>{language}</span>
            <span>{styling}</span>
        </div>
        <div className="code">
            <AiFillGithub onClick={()=>window.open(projectCode, '_blank')} style={{width: '30px', height: '30px'}} />
            <HiOutlineExternalLink onClick={()=>window.open(liveDemo, '_blank')} style={{width: '30px', height: '30px'}} />
        </div>
        </div>
    </div>
  )
}
