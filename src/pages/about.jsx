import React from "react";
import Title from "./../components/title";

const About = () => {
  return (
    <div className="inner">
      <Title lineContent="This is the" lineContent2="About page" />
      <div>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
    </div>
  );
};

export default About;
