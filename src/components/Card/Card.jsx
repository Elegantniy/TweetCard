import css from './Card.module.css';
import { Button } from '../Button/Button';
import { UserStat } from '../UserStat/UserStat';
import { Line } from '../Line/Line';
import { Avatar } from '../Avatar/Avatar';
import { UserWrap } from '../UserWrap/UserWrap';
import { ImageBlock } from '../ImageBlock/ImageBlock';
import PropTypes from 'prop-types';

export const Card = ({ users, onClick }) => {
  return (
    <ul className={css.cardList}>
      {users.map(user => {
        return (
          <li className={css.cardItem} key={user.id}>
            <ImageBlock />
            <UserWrap>
              <Line />
              <Avatar avatar={user.avatar} />
              <UserStat user={user.user} tweets={user.tweets} followers={user.followers} />
              <Button
                onClick={() => onClick(user.id)}
                following={user.following}
              />
            </UserWrap>
          </li>
        );
      })}
    </ul>
  );
};

Card.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      following: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
