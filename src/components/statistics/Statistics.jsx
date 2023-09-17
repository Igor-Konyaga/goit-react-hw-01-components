import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        <Item  data={stats} />
      </ul>
    </section>
  );
};

const Item = ({ data }) => {
  return data.map(obj => {
    return <li key={obj.id} className={css.item}>
      <span className={css.label}>.{obj.label}</span>
      <span className={css.percentage}>{obj.percentage}</span>
    </li>;
  });
};
