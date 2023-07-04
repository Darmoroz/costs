import { useState } from 'react';
import styles from './NewCost.module.css';

function NewCost({ onAddNewCost, modalClose }) {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'amount':
				setAmount(value);
				break;
			case 'calendar':
				setDate(value);
				break;

			default:
				break;
		}
	};
	const resetForm = () => {
		setName('');
		setAmount('');
		setDate('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name && amount && date) {
			const newCost = {
				description: name,
				amount,
				date: new Date(date),
			};
			onAddNewCost(newCost);
			resetForm();
			modalClose();
		}
	};

	return (
		<div className={styles['new-cost']}>
			<form onSubmit={handleSubmit}>
				<div className={styles['new-cost__controls']}>
					<div className={styles['new-cost__control']}>
						<label>
							Cost name
							<input
								type="text"
								name="name"
								onChange={handleChange}
								value={name}
							/>
						</label>
					</div>
					<div className={styles['new-cost__control']}>
						<label>
							Amount
							<input
								type="text"
								name="amount"
								onChange={handleChange}
								value={amount}
							/>
						</label>
					</div>
					<div className={styles['new-cost__control']}>
						<label>
							Date
							<input
								type="date"
								name="calendar"
								onChange={handleChange}
								value={date}
								min="2020-01-01"
								max="2025-01-01"
							/>
						</label>
					</div>
					<div className={styles['new-cost__actions']}>
						<button type="submit">Add cost</button>
						<button type="button" onClick={modalClose}>
							Cancel
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default NewCost;
