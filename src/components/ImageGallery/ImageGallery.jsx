import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {API} from '../Api/Api';
import { toast } from 'react-toastify';
import s from './ImageGallery.module.css';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import {Button} from '../Button/Button';
import {Modal} from '../Modal/Modal';
import { Spinner } from '../Loader/Loader';


export function ImageGallery({ inputValue }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showImage, setShowImage] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setStatus('pending');

    API
      .fetchImages(inputValue, page)
      .then(images => {
        if (images.total === 0) {
          toast.error('nothing !');
          setStatus('idle');
          return;
        } else {
          setImages(prevState => [...prevState, ...images.hits]);
          setStatus('resolved');
          setLoadMore(true);
        }
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        })
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
    
    setStatus('pending');

  }, [inputValue, page]);


  const onLoadMore = () => {
    setPage(prevState => (prevState + 1));
  };

  const closeModal = () => {
    setShowImage(null);
  };
  


  
  if (status === 'pending') {
    return <Spinner />;
  }

  if (status === 'resolved') {
    return (
      <ul className={s.ImageGallery}>
        {images.map((img, idx) => {
          return (
            <ImageGalleryItem
              image={img}
              key={idx}
              alt={img.tags}
              id={img.id}
              webformatURL={img.webformatURL}
              openModal={setShowImage}
            />
          );
        })}

        {loadMore &&
          <Button onClick={onLoadMore} />
        }
  
        {showImage && (
          <Modal
            src={showImage.largeImageURL}
            alt={showImage.tags}
            onClose={closeModal}
          />
        )}
      </ul>
    );
  }

  if (status === 'rejected') {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    )
  }
}

ImageGallery.propTypes = {
  inputValue: PropTypes.string.isRequired,
}
