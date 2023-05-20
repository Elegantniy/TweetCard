import css from './UserWrap.module.css';

export const UserWrap = ({ children }) => {
  return <div className={css.userWrap}>{children}</div>;
};
