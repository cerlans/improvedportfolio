import React, { useState } from "react";
function Content() {
  const [currentClass, setClass] = useState("far fa-circle");
  function evin(event) {
    if (event.target.className === "projectTitle") {
     event.target.children[0].classList.toggle('fas')
     event.target.nextSibling.classList.toggle('displayProjects')
      console.log(event.target)
    }
  }
  return (
    <>
      <div className="container">
        <div className="imageContainer">
        <img src="https://i.vgy.me/z4svLJ.png" alt="z4svLJ.png"/>
        </div>
        <div className="header-container">
          <h1>Kevin G</h1>
          <span>Front-End Developer</span>
        </div>
        <div className="about">
          <h2>About</h2>
          <p>
            Hello! I'm a Front End developer based in Norwalk, Connecticut. My passion for Web Developement began in early highschool, but sadly they did not have classes that would have allowed me to delve more into my interests. I have a background in Web Developement and Design at Norwalk Community College, and i have 7 months left in my degree until completion!
          </p>
          <br />
          <p>
           The technologies that I am comfortable using are Sass, Tailwind, React-Router, Javascript, React, HTML and Vanilla CSS. I am self-driven, an adaptable learner, and am constantly striving to challenging myself with complex projects.
          </p>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          <p>
           Projects that i have completed so far on my journey, some off them are still works in progress!
          </p>
          <i className="hint">Click to View More</i>
          <div className="projectList" onClick={evin}>
            <div>
              <div className="projectTitle">
                <i className="far fa-circle"></i>Code And Learn
              </div>
              <div className="animate__animated animate__fadeIn hideProject">
                <div className="projectDetails">
                  <div className="projectImage">
                    <a href='https://github.com/cerlans/Vanilla-code-learn'><img src="https://i.vgy.me/q7YAVe.png" alt="2frNWJ.png"/></a>
                   
                  </div>
                </div>
                <div className="projectDescription">
                  <p>
                   A single page application that is made with vanilla javascript, Google auth, firebase, and youtube Data V3 API. routing is handled by flat iron director.js, a small routing library
                  </p>
                  <p>
                    It is an interactive note taking/video watching application
                    that allows users to save courses, search for courses, watch
                    videos, and take notes during video watching.
                  </p>
                   <i>Work In progress</i>
                  <div className="madeWith">
                    <i className="fab fa-js"></i>
                    <i className="fab fa-google"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fas fa-user-lock"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="projectTitle">
                <i className="far fa-circle"></i>JukeBox Media Player
              </div>
              <div className="hideProject">
                <div className="projectDetails">
                  <div className="projectImage">
                    <a href='https://cerlans.github.io/JukeBox/'><img src="https://i.vgy.me/PMmjQQ.png" alt="PMmjQQ.png" /></a>
                  </div>
                </div>
                <div className="projectDescription">
                  <p>
                    Responsive JukeBox made with Vanilla Javascript, users are
                    able to upload and play there songs through the browser,
                    uses the browsers FileReader API
                  </p>
                  <div className="madeWith">
                    <i className="fab fa-js"></i>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="projectTitle">
                <i className="far fa-circle"></i>Coastal Web Solutions
              </div>
              <div className="hideProject">
                <div className="projectDetails">
                  <div>
                    <a href='https://stackblitz.com/edit/web-platform-fenwu4'><img src="https://i.vgy.me/99aR1b.png" />
                    </a>
                  </div>
                </div>
                <div className="projectDescription">
                  <p>
                    Coastal Web Solutions is my personal company page, i created this website for my business in NORWALK CT. 
                    Made in HTML and CSS
                  </p>
                  <div className="madeWith">
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="projectTitle">
                <i className="far fa-circle"></i>Bookify
              </div>
              <div className="hideProject">
                <div className="projectDetails">
                  <div>
                   <a href='https://bookifys.netlify.app/'><img src="https://i.vgy.me/BU8Jq7.png" alt="BU8Jq7.png" /></a>
                  </div>
                </div>
                <div className="projectDescription">
                  <p>
                    Using the Google Books api, users can look up with isbn,
                    title, or author and return a list off books relating to the
                    search query.
                  </p>
                  <p>
                    Users can also view a sample, or buy the book directly from
                    Googlebooks
                  </p>
                  <div className="madeWith">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-google"></i>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p>You can contact me at any off the methods down below</p>
          <i className="emailMessage">(Email icon will open a new window)</i>
          <div className="social-links">
            <a href="mailto:kgomez222@hotmail.com" target="_self">
              <i className="fas fa-envelope-open-text"></i>
            </a>
            <a href="https://github.com/cerlans" target="blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
