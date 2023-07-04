import styles from './Card.module.css';

function Card({ children, className }) {
	const classes = `${className} ${styles['card']}`;
	return <div className={classes}>{children}</div>;
}

export default Card;
