import React from "react";

const Hero = () => {
  return (
    <>
      <section className="grid grid-cols-2 h-screen w-full">
        <div className="flex flex-col justify-center">
          <div className="text-8xl">Julie Yue</div>
          <div className="text-4xl">
            Creating amazing web experiences is my passion
          </div>
          <div>
            <button type="button" className="text-4xl">
              Explore
            </button>
          </div>
        </div>
        <div className="flex align-middle-center">
          <div className="flex items-center">3D Element</div>
        </div>
      </section>
    </>
  );
};

export default Hero;
