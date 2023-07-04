import { formatDate } from '../../utils/formatDate';
import Card from '../Card/Card';
import styles from './CostItem.module.css';

function CostItem({ date, description, amount }) {
	const [day, month, year] = formatDate(date);
	return (
		<Card className={styles['cost-item']}>
			<div className={styles['cost-date']}>
				<span>{month}</span>
				<span>{year}</span>
				<span>{day}</span>
			</div>
			<div className={styles['cost-item__description']}>
				<h2>{description}</h2>
				<span className={styles['cost-item__price']}>${amount}</span>
			</div>
		</Card>
	);
}

export default CostItem;
