import { Todo } from './Todo';

export type TableProps = {
	title: string;
	allData: Todo[];
	current: number;
	setCurrent: Function;
	total: number;
	pageSize: number;
	onChangeStatus: Function;
	deleteTodo: Function;
}
