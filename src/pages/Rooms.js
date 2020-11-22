import React from "react";
import { Hero, Banner } from "../components";
import RoomsContainer from "../components/RoomsContainer";
import { Link } from "react-router-dom";

export const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};
