import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';

export function App () {
  const [inputValue, setInputValue] = useState('');

  return (
    <div 
    style= {{
         display: 'grid',
         gridTemplateColumns: '1fr',
         gridGap: '16px',
         paddingBottom: '24px',
    }}
    >
      <Searchbar onNameSubmit={setInputValue} />

      <ImageGallery inputValue={inputValue}></ImageGallery>

      <ToastContainer autoClose={3000} />
    </div>
  );
}