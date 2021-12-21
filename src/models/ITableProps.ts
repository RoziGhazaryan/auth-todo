import { ITodo } from "./ITodo";

export interface ITableProps {
   title: string;
   allData: ITodo[];
   current: number;
   setCurrent: Function;
   total: number;
   pageSize: number;
   onChangeStatus: Function;
   deleteTodo: Function;
 }