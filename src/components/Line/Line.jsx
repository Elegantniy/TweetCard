import css from './Line.module.css';
import line from '../../images/line.png';

export const Line = () => {
  return <img src={line} className={css.userLine} alt="line" />;
};
