import { useState } from 'react';
import useToggle from '../hooks/useToggle';
import Costs from './Costs/Costs';
import NewCost from './NewCost/NewCost';

import { costs } from '../assets/costsData';
import { Modal } from './Modal/Modal';
import AddNewCost from './AddNewCost/AddNewCost';

function App() {
	const [costsState, setCostState] = useState(costs);
	const [on, toggle] = useToggle(false);

	const addNewCost = (newCost) => {
		if (!newCost) {
			return;
		}
		setCostState((state) => [...state, newCost]);
	};

	return (
		<div className="container">
			{on && (
				<Modal
					onClose={() => {
						toggle(false);
					}}
				>
					<NewCost onAddNewCost={addNewCost} modalClose={toggle} />
				</Modal>
			)}
			<AddNewCost click={toggle} />
			<Costs costs={costsState} />
		</div>
	);
}

export default App;
