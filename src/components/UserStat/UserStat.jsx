import css from './UserStat.module.css';
import PropTypes from 'prop-types';

export const UserStat = ({ followers, tweets, user }) => {
  return (
    <ul className={css.userTextWrap}>
      <li className={css.userText}>{user} </li>
      <li className={css.userText}> {tweets} Tweets</li>
      <li className={css.userText}>
        {followers.toLocaleString('en-US')} Followers
      </li>
    </ul>
  );
};
UserStat.propTypes = {
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired
};
