import { TailSpin } from 'react-loader-spinner';
import style from '../style.module.css';
export const Loader = () => {
  return (
    <div className={style.loader}>
      <TailSpin
        height="80"
        width="80"
        color="#346341"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};