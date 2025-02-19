import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";

export const Contact = () => {
  return (
    <div
      className="contact"
      style={{
        backgroundImage: "url('/images/blog8.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "100px 20px", // Increased top padding
        margin: "20px 0",
      }}
    >
      <div className="container">
      
        <Heading title="Keep In Touch" />
        <div className="content flexsb">
          <div className="right">
            <form>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Name"
                  data-aos="flip-left"
                  className="input-space"
                  required // Added required attribute
                />
                <input
                  type="email"
                  placeholder="Email"
                  data-aos="flip-right"
                  className="input-space"
                  required // Added required attribute
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                data-aos="flip-up"
                className="input-space"
                required // Added required attribute
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                data-aos="flip-down"
                className="input-space"
                required // Added required attribute
                placeholder="Your Message" // Added placeholder
              ></textarea>
              <button data-aos="zoom-in-up" className="submit-button">
                Submit
              </button>
            </form>
          </div>
          <div className="left">
            <div className="contact-info-wrapper"> {/* New wrapper div */}
              {contact.map((item) => (
                <div
                  className="box contact-box"
                  data-aos="zoom-in"
                  key={item.id || item.text1}
                >
                  <i className="contact-icon">{item.icon}</i>
                  <div className="contact-details"> {/* New div for details */}
                    <p className="contact-text">{item.text1}</p>
                    <p className="contact-text">{item.text2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};