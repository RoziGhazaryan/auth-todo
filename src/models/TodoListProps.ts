import { ChangeEventHandler } from 'react';
export interface TodoListProps {
	currentActive: number;
	currentCompleted: number;
	setCurrentActive: Function;
	setCurrentCompleted: Function;
	onChangeStatus: Function;
	deleteUserTodo: Function;
	activeData: Array<object>;
	completedData: Array<object>;
	onSearch: ChangeEventHandler;
}
