import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Project({
  name,
  image,
  description,
  language,
  styling,
  projectCode,
  reverseRow,
  liveDemo,
  liveDemoStyle,
  githubStyle
}) {
  return (
    <div className="project" style={{ flexDirection: reverseRow }}>
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
        <div className="project-source">
          <div className="code" data-title="code">
          <AiFillGithub
            onClick={() => window.open(projectCode, "_blank")}
            style={githubStyle}
          />
          </div>
          <div className="live-demo" data-title="live-demo">
          <HiOutlineExternalLink
            onClick={() => window.open(liveDemo, "_blank")}
            style={liveDemoStyle}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
