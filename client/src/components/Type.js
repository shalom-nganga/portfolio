import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full Stack Developer",
          "Programmer",
          "Competitive Coder",
          "code comedian",
        ],
        autoStart: true,
        loop: true,
        // deleteSpeed: 300,
      }}
    />
  );
}

export default Type;
