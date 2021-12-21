import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useSignUp = () => {
  // useHistory
  const history = useHistory();

  // sign up
  const onFinish = (values: object) => {
    // localStorage
    const usersStr = localStorage.getItem("users") as string;
    const userIdStr = localStorage.getItem("userId") as string;
    const users = JSON.parse(usersStr);
    const userId = JSON.parse(userIdStr) + 1;

    users.push({ id: userId, ...values, todoId: 0, todo: [], tokens: [] });

    localStorage.setItem("userId", userId);
    localStorage.setItem("users", JSON.stringify(users));

    // history
    history.push("/sign-in");
  };

  // useEffect
  useEffect(() => {
    // localStorage
    const users = localStorage.getItem("users");
    if (!users) {
      localStorage.setItem("users", "[]");
      localStorage.setItem("userId", "0");
    }
  }, []);

  return {
    onFinish,
  };
};

export default useSignUp;
