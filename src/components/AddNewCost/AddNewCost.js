import styles from '../NewCost/NewCost.module.css';

function AddNewCost({ click }) {
	return (
		<div className={styles['new-cost']}>
			<button click="butont" onClick={click}>
				Add new cost
			</button>
		</div>
	);
}

export default AddNewCost;
