import PropTypes from 'prop-types';
import style from '../style.module.css';
export const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(image => (
    <li
      onClick={() => onClick(image.id)}
      key={image.id}
      className={style.ImageGalleryItem}
    >
      <img className={style.ImageGalleryItemimage} src={image.webformatURL} alt={image.tags} />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};