import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="profile">
          <div className="profile-div">
            <h1 className="profession">
              frontend react web Developer{" "}
              <img
                className="waving-hand"
                src={require("./images/Waving_Hand_Sign_Emoji.webp")}
                alt="waving"
              />
            </h1>
            <span className="name">
              hii, i'm Gautam Purohit. A Passionate Front-end React
              <br /> Developer based in Surat, Gujarat
            </span>
            <div className="social-links">
              <div data-title="Github">
                <BsGithub
                  style={{ width: "22px", height: "22px" }}
                  onClick={() =>
                    window.open("https://github.com/Purohitgautam", "_blank")
                  }
                />
              </div>
              <div data-title="Linked-In">
                <BsLinkedin
                  style={{ width: "22px", height: "22px" }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/gautam-purohit-027417207",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="image"></div>
        </div>
        <div className="skills">
          <span>Tech Stacks</span>
          <div>
            <img src={require("./images/html-logo.png")} alt="HTML" />
            <img src={require("./images/css-logo.png")} alt="CSS" />
            <img
              src={require("./images/javaScript-logo.png")}
              alt="javaScript"
            />
            <img
              src={require("./images/Typescript_logo.png")}
              alt="typescript"
            />
            <img src={require("./images/react-logo.png")} alt="react.js" />
            <img src={require("./images/next-js-logo.png")} alt="next.js" />
            <img src={require("./images/redux-logo.png")} alt="redux" />
          </div>
        </div>

        <div className="about-me">
          <div className="about-me-image">
            <img
              className="laptop-img"
              src={require("./images/purohitSocial-image.png")}
              alt="projectImage"
            />
            <span className="image-side">
              <img
                className="profession-text"
                src={require("./images/profession-text.svg").default}
                alt="text"
              />
            </span>
            <img
              className="working-emoji"
              src={require("./images/working-emoji.png")}
              alt="working-emoji"
            />
          </div>

          <div className="about-me-description">
            <h3>"ABOUT ME"</h3>
            <p>
              A dedicated Front-end Developer based in surat, India. As a Junior
              Front-End Developer, I possess an impressive arsenal of skills in
              HTML, CSS, JavaScript, React. I am also a team player who thrives
              in collaborating with cross-functional teams to produce
              outstanding web applications
            </p>
          </div>
          <div className="hanger">
            <div className="digital-ball">
              <div className="overlay"></div>
              <div className="globe">
                <div className="globe-wrap">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle-hor"></div>
                  <div className="circle-hor-middle"></div>
                </div>
              </div>
            </div>
            <div className="hanger-text">
              <span>Located </span>
              <span>in surat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
