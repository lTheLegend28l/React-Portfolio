import "./index.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatedLetters } from "../AnimatedLetters";
import LogoTitle from "../../assets/images/logo-p.svg";
import { Logo } from "./Logo";
import Loader from "react-loaders";

export const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m</span>
            <img
              src={LogoTitle}
              alt="developer"
              style={{ marginRight: "3px" }}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"radyun,".split("")}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Web Wizard".split("")}
              idx={22}
            />
          </h1>
          <h2>Web Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};
