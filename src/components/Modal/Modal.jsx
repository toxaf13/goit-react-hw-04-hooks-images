import PropTypes from 'prop-types';
import style from '../style.module.css';
export const Modal = ({ clickImage, handleClose }) => {
  return (
    <div onClick={() => handleClose()} className={style.Overlay}>
      <div className={style.modal}>
        <img src={clickImage.largeImageURL} alt={clickImage.tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  clickImage: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};