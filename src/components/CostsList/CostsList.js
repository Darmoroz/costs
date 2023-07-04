import CostItem from '../CostItem/CostItem';
import styles from './CostsList.module.css';

function CostsList({ costs }) {
	return (
		<ul>
			{costs.length ? (
				costs.map(({ date, amount, description }) => (
					<li key={date}>
						<CostItem date={date} amount={amount} description={description} />
					</li>
				))
			) : (
				<h2 className={styles['cost-list__fallback']}>No costs this year</h2>
			)}
		</ul>
	);
}

export default CostsList;
