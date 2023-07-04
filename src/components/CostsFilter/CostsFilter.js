import styles from './CostsFilter.module.css';

function CostsFilter({ onChangeYear, selectedValue }) {
	const handleChangeYear = (e) => {
		const { value } = e.target;
		onChangeYear(value);
	};

	return (
		<div className={styles['costs-filter']}>
			<div className={styles['costs-filter__control']}>
				<label>
					Filter by year
					<select onChange={handleChangeYear} value={selectedValue}>
						<option value="2020">2020</option>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
					</select>
				</label>
			</div>
		</div>
	);
}

export default CostsFilter;
