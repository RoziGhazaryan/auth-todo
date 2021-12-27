import { ChangeEventHandler } from 'react';
export type TodoListProps = {
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
