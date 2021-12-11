import { Button, Input } from "antd";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
import './style.scss';

const Home: FC = () => {
  // useDispatch
  const dispatch = useAppDispatch();

  // actions
  const { refreshUserData, addTodo } = userSlice.actions;

  // useSelector
  const { userState } = useAppSelector(state => state.userReducer);

  // storage
  let usersStr = localStorage.getItem('users') as string;
  let users = JSON.parse(usersStr);

  const userIdStr = sessionStorage.getItem('userId') as string;
  const userId = JSON.parse(userIdStr);

  let user = users.find((el: any) => +(el.id) === userId);

  // useState
  const [todoText, setTodoText] = useState<string>('');

  // on change input value
  const onChange = (e: any) => {
    setTodoText(e.target.value);
  }

  const todoObj = { id: user.todoId + 1, text: todoText };

  const onAddTodo = () => {
    setTodoText('');
    dispatch(refreshUserData());
    dispatch(addTodo(todoObj));
  }

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onAddTodo();
    }
  }

  useEffect(() => {
    dispatch(refreshUserData());
  }, [dispatch, refreshUserData]);

  return (
    <div className="g-main-page">
      <div className="add-todo">
        <Input value={todoText} onChange={onChange} onKeyDown={onKeyDown} />
        <Button onClick={onAddTodo}
          disabled={!todoText}
          type="primary"
          className="add-btn">Add Todo</Button>
      </div>
      <div className="todo-list">
        {userState?.todo?.map((el: any) => {
          return (
            <div className="todo-block" key={el.id}>
              {el.text}
            </div>
          )
        })}
      </div>
    </div >
  )
}
export default Home