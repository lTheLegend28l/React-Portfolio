import "./index.scss";
import Loader from "react-loaders";
import { AnimatedLetters } from "../AnimatedLetters";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const refForm = useRef();

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const onSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_og1w0cs",
        "template_vhlo2tf",
        refForm.current,
        "mpw8QOUF5iY3t4QWL"
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            setSubmitting(false);
            setSubmitted(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact me".split("")}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities. If you have any
            questions for me, feel free to contact me with the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={onSubmit}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value={submitting ? "SENDING" : submitted ? "SENT" : "SEND"}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map">
          <h1>Based in Allen, TX</h1>
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Allen,%20Tx+(Pradyun%20Tandra)&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/distance-area-calculator.html">
              distance maps
            </a>
          </iframe>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
