import "./index.scss";
import LogoP from "../../../assets/images/logo-p.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

export const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap.fromTo(
      outlineLogoRef.current,
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 2, delay: 2 }
    );

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4.1,
        duration: 2,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={LogoP} alt="P" ref={solidLogoRef} />
      <svg
        width="561pt"
        height="867pt"
        version="1.0"
        viewBox="0 0 561 867"
        xmlns="http://www.w3.org/2000/svg">
        <g
          className="svg-container"
          transform="translate(0 868) scale(.1 -.1)"
          fill="none">
          <path
            ref={outlineLogoRef}
            d="m 1.1308292,14.843956 2888.2566708,0.61871 481.5105,15.749781 428.5781,45.499374 250.1497,50.749319 290.3835,92.74872 213.4144,99.74864 178.4285,110.24849 192.4228,159.24777 180.1777,199.49729 134.696,201.24728 129.448,248.49657 124.2003,328.9955 45.4817,173.2477 59.4762,379.7448 12.2451,318.4956 -3.4986,225.7469 -1.7494,335.9954 -6.7481,163.3516 -21.045,201.8497 -20.4392,104.2111 -41.4327,139.8336 -67.9727,196.7978 -88.5625,268.8649 -111.605,214.2155 -166.1325,234.7346 -204.666,232.1998 -212.5142,171.7355 -265.8427,139.6393 -244.3543,91.8441 -308.4772,83.3949 -416.6348,63.2455 -463.2643,19.8003 -428.5782,1.75 H 976.10849 l -1.74923,432.244 1.74923,2924.21 H 0 Z"
          />
        </g>
      </svg>
    </div>
  );
};
