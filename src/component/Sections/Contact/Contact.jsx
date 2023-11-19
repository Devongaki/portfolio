// Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsArrowRight } from "react-icons/bs";
import "./Contact.css";
import { Footer } from "../Footer/Footer";

function Contact() {
  const [formSubmited, setFormSubmited] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cngh3z5",
        "template_3kq9psp",
        form.current,
        "qrm-ysFxpdX_JiZp1"
      )
      .then(
        (result) => {
          setFormSubmited(true);
          console.log(result.text);

          setTimeout(() => {
            setFormSubmited(false);
          }, 3000)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {formSubmited ? (
        <div className="message-container">
          Thank you for your message.
        </div>
      ) : (
        <section className="main-content" id="contact">
          <div className="contact-text container">
            <h1 className="contact-heading">Contact</h1>
            <Footer />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="form-container container"
          >
            <div className="form-fields">
              <input
                type="text"
                name="user_name"
                placeholder=" Name"
                className="FormControl"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder=" Email"
                className="FormControl"
                required
              />
              <textarea
                name="message"
                placeholder=" Message"
                aria-required="true"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-button">
              Send message <BsArrowRight />
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default Contact;
