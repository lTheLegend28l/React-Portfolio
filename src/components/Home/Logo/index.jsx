import "./index.scss";
import LogoP from "../../../assets/images/logo-p.svg";
import animatedOutline from "../../../assets/images/logo-p_animated.svg";
import { useEffect, useRef } from "react";

export const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    if (solidLogoRef.current) {
      solidLogoRef.current.style.opacity = 0;
      solidLogoRef.current.style.animation = "fade-in 2s ease-out 5s forwards";
    }
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={LogoP} alt="P" ref={solidLogoRef} />
      <img src={animatedOutline} alt="animated svg" />
    </div>
  );
};
