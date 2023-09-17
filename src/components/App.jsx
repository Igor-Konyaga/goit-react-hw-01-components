import css from './App.module.css';
import userData from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import data from '../data/data.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend-List/Friend-list';
import { TransactionHistory } from './transactions/Transactions';

export const App = () => {
  return (
    <div className={css.app}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

		<TransactionHistory  items={transactions}/>
    </div>
  );
};
