import PropTypes from 'prop-types';
import style from '../style.module.css';

export const Searchbar = ({ handleSubmit }) => {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchFormbutton}>
          <span className={style.SearchFormbuttonlabel}>Search</span>
        </button>

        <input
          className={style.SearchForminput}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};