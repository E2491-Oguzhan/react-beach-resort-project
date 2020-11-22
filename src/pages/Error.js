import React from "react";
import { Hero, Banner } from "../components";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};
