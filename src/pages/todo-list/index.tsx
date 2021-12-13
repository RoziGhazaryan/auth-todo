import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
import TodoTable from '../../components/todo-table';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from "antd";
import './style.scss';

const TodoList: FC = () => {
  // useDispatch
  const dispatch = useAppDispatch();

  // actions
  const {refreshUserData, changeTodoStatus, deleteTodo, searchTodo} = userSlice.actions;

  // useSelector
  const {userState} = useAppSelector(state => state.userReducer);

  // useState
  const [currentActive, setCurrentActive] = useState(1);
  const [currentCompleted, setCurrentCompleted] = useState(1);

  // useEffect
  useEffect(() => {
    dispatch(refreshUserData());
  }, [dispatch, refreshUserData]);

  // change status
  const onChangeStatus = (el: any) => {
    dispatch(changeTodoStatus(
      {
        id: el.id,
        status: el.status === 'completed' ? 'active' : 'completed',
      }
    ));
  };

  // delete todo
  const deleteUserTodo = (el: any) => {
    dispatch(deleteTodo({id: el.id}))
  }

  // filter by status
  const activeData = userState.todo.filter((el: any) => el.status === 'active');
  const completedData = userState.todo.filter((el: any) => el.status === 'completed');

  // search todo
  const onSearch = (e: any) => {
    dispatch(searchTodo(e?.target?.value));
  }

  return (
    <div className="g-page">
      <div className="search-todo">
        <Input onChange={onSearch} placeholder="search todo by name or description" />
        <SearchOutlined />
      </div>
      <div className="todo-tables">
        <TodoTable
          title='Active Todos'
          allData={activeData}
          current={currentActive}
          setCurrent={setCurrentActive}
          total={activeData.length}
          pageSize={3}
          onChangeStatus={onChangeStatus}
          deleteTodo={deleteUserTodo}
        />
        <TodoTable
          title='Completed Todos'
          allData={completedData}
          current={currentCompleted}
          setCurrent={setCurrentCompleted}
          total={completedData.length}
          pageSize={2}
          onChangeStatus={onChangeStatus}
          deleteTodo={deleteUserTodo}
        />
      </div>
    </div>
  )
}
export default TodoList;