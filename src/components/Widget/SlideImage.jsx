import PropTypes from "prop-types";

const SliderImage = ({ src, type, alt, isVisible }) => {
  return (
    <img
      src={src}
      className={`card-carousel-image ${isVisible ? "visible" : "unvisible"}`}
      data-index={type}
      alt={alt}
    />
  );
};

SliderImage.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default SliderImage;
