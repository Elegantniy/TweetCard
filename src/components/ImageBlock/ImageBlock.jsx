import css from './ImageBlock.module.css';
import background from '../../images/background.png';
import logo from '../../images/logo.png';

export const ImageBlock = () => {
  return (
    <ul className={css.imageWrap}>
      <li className={css.imageItem}>
        <img
          src={background}
          className={css.backgroundImage}
          alt="background"
        />
      </li>
      <li className={css.imageItem}>
        <img src={logo} className={css.logo} alt="logo" />
      </li>
    </ul>
  );
};
