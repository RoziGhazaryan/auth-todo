import { ChangeEvent } from 'react';

export interface AddTodoProps {
	name: string;
	description: string;
	onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeDescription: (e: any) => void;
	onKeyDown: (e: { key: string }) => void;
	onAddTodo: () => void;
}
