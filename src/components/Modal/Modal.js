import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
	useEffect(() => {
		const handleKeyClose = (e) => {
			if (e.code === 'Escape') {
				onClose();
			}
		};
		window.addEventListener('keydown', handleKeyClose);
		return () => {
			window.removeEventListener('keydown', handleKeyClose);
		};
	}, [onClose]);

	const handleClose = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return createPortal(
		<div className={styles['modal__backdrop']} onClick={handleClose}>
			<div className={styles['modal__content']}>{children}</div>
		</div>,
		modalRoot,
	);
};
