import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, officia recusandae perspiciatis debitis consectetur, similique quos aut ipsa mollitia minima quam? Praesentium aliquid necessitatibus temporibus consequuntur debitis aut nesciunt",
      },
      {
        icon: <FaHiking />,
        title: "Endless Adventures",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, officia recusandae perspiciatis debitis consectetur, similique quos aut ipsa mollitia minima quam? Praesentium aliquid necessitatibus temporibus consequuntur debitis aut nesciunt",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, officia recusandae perspiciatis debitis consectetur, similique quos aut ipsa mollitia minima quam? Praesentium aliquid necessitatibus temporibus consequuntur debitis aut nesciunt",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, officia recusandae perspiciatis debitis consectetur, similique quos aut ipsa mollitia minima quam? Praesentium aliquid necessitatibus temporibus consequuntur debitis aut nesciunt",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services"></Title>
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
