import { useCallback, useEffect, useRef, useState } from "react";
import { sliderImages } from "@data/data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import SliderImage from "./SlideImage.jsx";

const StartWidget = () => {
  const [currentIndex, setIndex] = useState(0);
  const slideWrapper = useRef(null);

  const nextSlide = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex >= sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex <= 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  }, []);

  const translateSlide = useCallback((scale) => {
    slideWrapper.current &&
      (slideWrapper.current.style.transform = `translateX(-${scale * 100}%)`);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  useEffect(() => {
    translateSlide(currentIndex);
  }, [translateSlide, currentIndex]);

  function motionSlide(event) {
    const { type } = event.target.dataset;
    if (type === "prev") {
      prevSlide();
    } else if (type === "next") {
      nextSlide();
    }
  }

  return (
    <div className="card">
      <div className="card-carousel">
        <div className="card-carousel-wrapper" ref={slideWrapper}>
          {sliderImages.map((item, ind) => {
            return (
              <SliderImage
                key={ind}
                src={item.src}
                type={ind}
                alt={item.description}
                isVisible={ind === currentIndex}
              />
            );
          })}
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">Анонс событий</h2>
        <p className="card-text">
          Добро пожаловать на сайт по демонстрации надвигающихся мероприятий в
          городе Самара! Организуйте дальнейший план по посещению выставок,
          концертов, театров, чтобы в вашей жизни появилась активность.
        </p>
        <button className="btn btn-continue">Продолжить</button>
        <div className="card-btn-bar">
          <button
            className="btn btn-prev"
            data-type="prev"
            onClick={motionSlide}
          >
            <FaArrowLeft />
          </button>
          <button
            className="btn btn-next"
            data-type="next"
            onClick={motionSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartWidget;
