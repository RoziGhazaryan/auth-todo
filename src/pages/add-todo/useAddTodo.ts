import { useCallback, useMemo, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
import moment from "moment";

const useAddTodo = () => {
  // useDispatch
  const dispatch = useAppDispatch();

  // actions
  const { refreshUserData, addTodo } = userSlice.actions;

  // useState
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // storage
  const usersStr = localStorage.getItem("users") as string;
  const users = JSON.parse(usersStr);
  const token = sessionStorage.getItem("token") as string;

  const user = users.find((el: any) => el.tokens?.includes(token));

  interface TodoObj {
    id: number;
    key: number;
    status: string;
    name: string;
    description: string;
    creationDate: string;
  }

  const todoObj: TodoObj = useMemo(() => {
    return {
      id: user.todoId + 1,
      key: user.todoId + 1,
      status: "active",
      name,
      description,
      creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
  }, [user.todoId, name, description]);

  // on change values
  const onChangeName = useCallback((e: any) => {
    setName(e.target.value);
  }, []);

  const onChangeDescription = useCallback((e: any) => {
    setDescription(e.target.value);
  }, []);

  // add todo
  const onAddTodo = useCallback(() => {
    setDescription("");
    dispatch(refreshUserData());
    dispatch(addTodo(todoObj));
    setName("");
    setDescription("");
  }, [dispatch, addTodo, refreshUserData, todoObj]);

  const onKeyDown = (e: any) => {
    if (e.key === "Enter" && name && description) {
      onAddTodo();
    }
  };

  return {
    name,
    description,
    onChangeName,
    onChangeDescription,
    onKeyDown,
    onAddTodo,
  };
};

export default useAddTodo;
