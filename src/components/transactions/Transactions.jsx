import css from './Transaction.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.mainRow}>
        <tr className={css.mainRowBody}>
          <th className={css.mainRowBodyItem}>Type</th>
          <th className={css.mainRowBodyItem}>Amount</th>
          <th className={css.mainRowBodyItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(transaction => {
          return (
            <tr key={transaction.id} className={css.tableRow}>
              <td className={css.tableRowItem}>{transaction.type}</td>
              <td className={css.tableRowItem}> {transaction.amount}</td>
              <td className={css.tableRowItem}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
