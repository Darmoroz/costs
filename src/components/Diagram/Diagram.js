import styles from './Diagram.module.css';
import DiagramBar from '../DiagramBar/DiagramBar';

function Diagram({ diagramsData }) {
	const maxValue = diagramsData.reduce((max, diagram) => {
		return diagram.value > max ? diagram.value : max;
	}, 0);

	return (
		<ul className={styles['diagram']}>
			{diagramsData.map(({ label, value }) => (
				<li title={value} key={label}>
					<DiagramBar value={value} maxValue={maxValue} label={label} />
				</li>
			))}
		</ul>
	);
}

export default Diagram;
