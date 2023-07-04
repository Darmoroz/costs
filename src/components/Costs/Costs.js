import { useState } from 'react';

import Card from '../Card/Card';
import CostsFilter from '../CostsFilter/CostsFilter';
import styles from './Costs.module.css';
import CostsList from '../CostsList/CostsList';
import CostsDiagram from '../CostsDiagram/CostsDiagram';

function Costs({ costs }) {
	const [selectedYear, setSelectedYear] = useState(2023);

	const handleChangeYear = (year) => {
		setSelectedYear(year);
	};

	const filteredCosts = costs.filter((cost) => {
		return cost.date.getFullYear() === +selectedYear;
	});

	return (
		<Card className={styles['costs']}>
			<CostsFilter
				onChangeYear={handleChangeYear}
				selectedValue={selectedYear}
			/>
			<CostsDiagram filteredCosts={filteredCosts} />
			<CostsList costs={filteredCosts} />
		</Card>
	);
}

export default Costs;
