import css from './Friend-list.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li>
           <div> <img src={friend.avatar} alt={`Friend ${friend.name}`} /></div>
			  <p>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
