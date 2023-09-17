import css from './Friend-list.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            {friend.isOnline ? (
              <span className={`${css.status} ${css.online}`}></span>
            ) : (
              <span className={`${css.status} ${css.offline}`}></span>
            )}
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
