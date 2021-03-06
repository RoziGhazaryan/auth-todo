import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Todo } from "../../models/Todo";
import { TodoObject } from "../../models/TodoObject";
import { userSlice } from "../../store/reducers/UserSlice";

const useTodoList = () => {
  // useDispatch
  const dispatch = useAppDispatch();

  // actions
  const { refreshUserData, changeTodoStatus, deleteTodo, searchTodo } =
    userSlice.actions;

  // useSelector
  const { userState } = useAppSelector((state) => state.userReducer);

  // useState
  const [currentActive, setCurrentActive] = useState<number>(1);
  const [currentCompleted, setCurrentCompleted] = useState<number>(1);

  // useEffect
  useEffect(() => {
    dispatch(refreshUserData());
  }, [dispatch, refreshUserData]);

  // change status
  const onChangeStatus = useCallback(
    (el: TodoObject) => {
      dispatch(
        changeTodoStatus({
          id: el.id,
          status: el.status === "completed" ? "active" : "completed",
        })
      );
    },
    [dispatch, changeTodoStatus]
  );

  // delete todo
  const deleteUserTodo = useCallback(
    (el: TodoObject) => {
      dispatch(deleteTodo({ id: el.id }));
    },
    [dispatch, deleteTodo]
  );

  // filter by status
  const activeData = useMemo(
    () => userState.todo.filter((el: Todo) => el.status === "active"),
    [userState.todo]
  );

  const completedData = useMemo(
    () => userState.todo.filter((el: Todo) => el.status === "completed"),
    [userState.todo]
  );

  // search todo
  const onSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(searchTodo(e?.target?.value));
    },
    [dispatch, searchTodo]
  );

  return {
    currentActive,
    setCurrentActive,
    currentCompleted,
    setCurrentCompleted,
    onChangeStatus,
    deleteUserTodo,
    activeData,
    completedData,
    onSearch,
  };
};

export default useTodoList;
