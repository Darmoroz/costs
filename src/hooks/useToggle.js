import { useReducer } from 'react';

const toggleReducer = (state, action) => {
	return action === 'boolean' ? action : !state;
};

const useToggle = (initialValue) => {
	return useReducer(toggleReducer, initialValue);
};

export default useToggle;
