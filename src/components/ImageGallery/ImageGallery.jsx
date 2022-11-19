import PropTypes from 'prop-types';
import style from '../style.module.css';
export const ImageGallery = ({ children }) => {
  return <ul className={style.ImageGallery}>{children}</ul>;
};

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};