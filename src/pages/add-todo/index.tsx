import { FC, useState } from "react";
import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useAppDispatch } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
import moment from "moment";
import './style.scss';
import './responsive.scss';

const AddTodo: FC = () => {
  // useDispatch
  const dispatch = useAppDispatch();

  // actions
  const {refreshUserData, addTodo} = userSlice.actions;

  // useState
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // storage
  const usersStr = localStorage.getItem('users') as string;
  const users = JSON.parse(usersStr);
  const token = sessionStorage.getItem('token') as string;

  const user = users.find((el: any) => el.tokens?.includes(token));

  const todoObj = {
    id: user.todoId + 1,
    key: user.todoId + 1,
    status: 'active',
    name,
    description,
    creationDate: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  // on change values
  const onChangeName = (e: any) => {
    setName(e.target.value);
  }

  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  }

  // add todo
  const onAddTodo = () => {
    setDescription('');
    dispatch(refreshUserData());
    dispatch(addTodo(todoObj));
    setName('');
    setDescription('');
  }

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter' && name && description) {
      onAddTodo();
    }
  }

  return (
    <div className="g-page">
      <div className="add-todo">
        <div className="add-todo--name">
          <Input
            value={name}
            onChange={onChangeName}
            onKeyDown={onKeyDown}
            placeholder="Todo Name"
          />
        </div>
        <div className="add-todo--descr">
          <TextArea
            value={description}
            onChange={onChangeDescription}
            onKeyDown={onKeyDown}
            placeholder="Todo Description"
          />
        </div>
        <div className="add-todo--btn">
          <Button onClick={onAddTodo}
                  disabled={!name || !description}
                  type="primary"
          > Add Todo
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo;