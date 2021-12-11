import { Button, Input } from "antd";
import { FC, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks/redux";
// import { userSlice } from "../../store/reducers/UserSlice";
import './style.scss';

const Home: FC = () => {
  // useDispatch
  // const dispatch = useAppDispatch();

  // actions
  // const { addUserData } = userSlice.actions;

  // useSelector
  // let { userState } = useAppSelector(state => state.userReducer);

  // storage
  let usersStr = localStorage.getItem('users') as string;
  let users = JSON.parse(usersStr);

  const userIdStr = sessionStorage.getItem('userId') as string;
  const userId = JSON.parse(userIdStr);

  let user = users.find((el: any) => +(el.id) === userId);

  // let user = users.find((el: any) => +(el.id) === userId);

  // useState
  const [todoText, setTodoText] = useState<string>('');

  // on change input value
  const onChange = (e: any) => {
    setTodoText(e.target.value);
  }

  const todoObj = { id: user.todoId + 1, text: todoText };

  const onAddTodo = () => {
    setTodoText('');
    usersStr = localStorage.getItem('users') as string;
    users = JSON.parse(usersStr);
    const userIndex = users.findIndex((el: any) => el.id === userId);
    user = users[userIndex];
    user.todo.push(todoObj);
    user.todoId += 1;
    console.log(users)
    localStorage.setItem('users', JSON.stringify(users));
  }

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onAddTodo();
    }
  }

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
        {user.todo?.map((el: any) => {
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