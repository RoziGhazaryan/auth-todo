import { ChangeEventHandler } from "react";

export interface IAddTodoProps {
  name: string;
  description: string;
  onChangeName: ChangeEventHandler;
  onChangeDescription: ChangeEventHandler;
  onKeyDown: (e: { key: string }) => void;
  onAddTodo: () => void;
}
