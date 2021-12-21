import { ITodo } from "./ITodo";

export interface ITableProps {
   title: string;
   allData: ITodo[];
   current: number;
   setCurrent: any;
   total: number;
   pageSize: any;
   onChangeStatus: any;
   deleteTodo: any;
 }