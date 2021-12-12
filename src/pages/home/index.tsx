import { Button, Input } from "antd";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
import TodoTable from '../../components/todo-table';
import './style.scss';

const Home: FC = () => {
  // useDispatch
  const dispatch = useAppDispatch();

  // actions
  const { refreshUserData, addTodo, changeTodoStatus } = userSlice.actions;

  // useSelector
  const { userState } = useAppSelector(state => state.userReducer);

  // useState
  const [current, setCurrent] = useState(1);

  // storage

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

  return (
    <div className="g-page">
      <div className="todo-tables">
        <TodoTable
          title='Active'
          allData={userState.todo}
          current={current}
          setCurrent={setCurrent}
          total={userState.todo.length}
          pageSize={2}
          onChangeStatus={onChangeStatus}
        />
        <TodoTable
          title='Completed'
          allData={userState.todo}
          current={current}
          setCurrent={setCurrent}
          total={userState.todo.length}
          pageSize={2}
          onChangeStatus={onChangeStatus}
        />
      </div>
    </div >
  )
}
export default Home