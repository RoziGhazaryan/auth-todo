import { FC, useState } from "react";
import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useAppDispatch } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
import './style.scss';
import moment from "moment";

const AddTodo: FC = () => {

   // useDispatch
   const dispatch = useAppDispatch();

   // actions
   const { refreshUserData, addTodo } = userSlice.actions;

   // useState
   const [name, setName] = useState<string>('');
   const [description, setDescription] = useState<string>('');

   let usersStr = localStorage.getItem('users') as string;
   let users = JSON.parse(usersStr);

   const userIdStr = sessionStorage.getItem('userId') as string;
   const userId = JSON.parse(userIdStr);

   let user = users.find((el: any) => +(el.id) === userId);

   const todoObj = { id: user.todoId + 1, status: 'active', name, description, creationDate: moment().format('YYYY-MM-DD HH:mm:ss') };

   console.log("moment", moment("2021-12-12 18:30:15").fromNow());

   // on change values
   const onChangeName = (e: any) => {
      setName(e.target.value);
   }

   const onChangeDescription = (e: any) => {
      setDescription(e.target.value);
   }

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
               <Input value={name} onChange={onChangeName} onKeyDown={onKeyDown} />
            </div>
            <div className="add-todo--descr">
               <TextArea value={description} onChange={onChangeDescription} onKeyDown={onKeyDown} />
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