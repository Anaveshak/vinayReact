import React from "react";
import { Heading } from "../common/Heading";
import { services } from "../data/dummydata";

export const Services = () => {
  return (
    <section className="services">
      <div className="services-background"> {/* Added background div */}
        <div className="container">
          <Heading title="Services" />
          <div className="content grid3">
            {services.map((item) => (
              <div className="box" data-aos="flip-left" key={item.id || item.title}> {/* Added key prop */}
                <i className="service-icon">{item.icon}</i> {/* Added class for icon */}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};