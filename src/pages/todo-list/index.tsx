import { FC } from "react";
import TodoTable from "../../components/todo-table";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import useTodoList from "./useTodoList";
import { TodoListProps } from "../../models/TodoListProps";
import "./style.scss";

const TodoList: FC = () => {
  const {
    currentActive,
    currentCompleted,
    setCurrentActive,
    setCurrentCompleted,
    onChangeStatus,
    deleteUserTodo,
    activeData,
    completedData,
    onSearch,
  }: TodoListProps = useTodoList();

  return (
    <div className="g-page">
      <div className="search-todo">
        <Input
          onChange={onSearch}
          placeholder="search todo by name or description"
          autoComplete="on"
        />
        <SearchOutlined />
      </div>
      <div className="todo-tables">
        <TodoTable
          title="Active Todos"
          allData={activeData}
          current={currentActive}
          setCurrent={setCurrentActive}
          total={activeData.length}
          pageSize={3}
          onChangeStatus={onChangeStatus}
          deleteTodo={deleteUserTodo}
        />
        <TodoTable
          title="Completed Todos"
          allData={completedData}
          current={currentCompleted}
          setCurrent={setCurrentCompleted}
          total={completedData.length}
          pageSize={3}
          onChangeStatus={onChangeStatus}
          deleteTodo={deleteUserTodo}
        />
      </div>
    </div>
  );
};
export default TodoList;
