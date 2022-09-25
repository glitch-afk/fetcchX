import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const featureList = [
  "CHAIN AGNOSTIC",
  "COMPOSABLE",
  "Trustless",
  "Smooth like web2",
];

const Card = ({ slides, classes, numberOfSlides, delay, direction }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={numberOfSlides}
      direction={direction}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: delay }}
      className="h-full select-none shadow-inner"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          className={`flex items-center font-bold select-none ${classes}`}
          key={index}
        >
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? `bg-gradient-to-b from-[#FF5D46] to-[#FDB658] bg-clip-text text-transparent text-center`
                  : `text-[#777D8B]/30`
              }
            >
              {slide}
            </span>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Card;
