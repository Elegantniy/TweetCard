import css from './Avatar.module.css';
import PropTypes from 'prop-types';

export const Avatar = ({ avatar }) => {
  return <img src={avatar} className={css.userImg} alt="line" />;
};

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};
