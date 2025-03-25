import React from "react";
import { Parallax } from "react-parallax";
const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 uppercase text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
