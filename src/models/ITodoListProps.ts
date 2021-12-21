import { ChangeEventHandler } from "react";
export interface ITodoListProps {
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
