import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomContainer from "../components/RoomContainer";
import { Link } from "react-router-dom";
export default function Rooms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Hero hero="roomsHero">
        <Banner
          title="Our Rooms"
          subtitle="Explore wide range of pocket friendly rooms here"
        >
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer></RoomContainer>
    </>
  );
}
