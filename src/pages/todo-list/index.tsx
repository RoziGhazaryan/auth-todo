import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
import TodoTable from '../../components/todo-table';
import './style.scss';

const TodoList: FC = () => {
  // useDispatch
  const dispatch = useAppDispatch();

  // actions
  const { refreshUserData, changeTodoStatus, deleteTodo } = userSlice.actions;

  // useSelector
  const { userState } = useAppSelector(state => state.userReducer);

  // useState
  const [currentActive, setCurrentActive] = useState(1);
  const [currentCompleted, setCurrentCompleted] = useState(1);

  useEffect(() => {
    dispatch(refreshUserData());
  }, [dispatch, refreshUserData]);

  const onChangeStatus = (el: any) => {
    dispatch(changeTodoStatus(
      {
        id: el.id,
        status: el.status === 'completed' ? 'active' : 'completed',
      }
    ));
  };

  const deleteUserTodo = (el: any) => {
    dispatch(deleteTodo({ id: el.id }))
  }

  const activeData = userState.todo.filter((el: any) => el.status === 'active');
  const completedData = userState.todo.filter((el: any) => el.status === 'completed');

  return (
    <div className="g-page">
      <div className="todo-tables">
        <TodoTable
          title='Active Todos'
          allData={activeData}
          current={currentActive}
          setCurrent={setCurrentActive}
          total={activeData.length}
          pageSize={9}
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
    </div >
  )
}
export default TodoList;