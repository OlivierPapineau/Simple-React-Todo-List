import React from 'react';
import { FaCheck, FaTimes, FaTrashAlt } from 'react-icons/fa';

interface IStatusButtonProps {
	done?: boolean;
	action: 'isDone' | 'delete';
	onClick: () => any;
}

const StatusButton = (props: IStatusButtonProps) => {
	const { done, action = 'delete', onClick } = props;
	let label = 'Delete';
	let icon = <FaTrashAlt />;
	let btnClassName = 'button-delete';

	if (action === 'isDone') {
		label = done ? 'Not done' : 'Done';
		icon = done ? <FaTimes /> : <FaCheck />;
		btnClassName = done ? 'button-done' : 'button-active';
	}

	return (
		<button onClick={onClick} className={btnClassName}>
			{icon}
			{label}
		</button>
	);
};

export { StatusButton };
