import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  return (
    <section className="about">
      <div className="about-background"> {/* Added background div */}
        <div className="container flex">
          {about.map((val) => (
            <React.Fragment key={val.id}> {/* Added key prop */}
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About Me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};