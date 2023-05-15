import "./index.scss";
import { AnimatedLetters } from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJsSquare,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { Loader } from "react-loaders";

export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>
          <p>
            I'm a web developer with experience in a plethora of web development
            languages and frameworks.
          </p>
          <p>
            I'm always learning new things and working with new technologies
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <img
                src="https://www.svgrepo.com/show/331488/mongodb.svg"
                alt="mongodb"
              />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNode} color="#8cc84b" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
