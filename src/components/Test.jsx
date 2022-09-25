import React from "react";
import Marquee from "react-easy-marquee";

const Test = () => {
  return (
    <Marquee
      className="w-full flex items-center justify-center space-x-2 text-white select-none overflow-hidden"
      reverse={true}
      duration={10000}
    >
      <span className="text-base mr-4 w-fit">Chain agnostic</span>
      <img src="/assets/star.svg" alt="star" className="w-fit mr-4" />
      <div className="text-base mr-4 w-fit">Permission less</div>
      <img src="/assets/star.svg" alt="star" className="w-fit mr-4" />
      <div className="text-base mr-4 w-fit">Trustless</div>
      <img src="/assets/star.svg" alt="star" className="w-fit mr-4" />
      <div className="text-base mr-4 w-fit">Smooth like web2</div>
      <img src="/assets/star.svg" alt="star" className="w-fit mr-4" />
    </Marquee>
  );
};

export default Test;
