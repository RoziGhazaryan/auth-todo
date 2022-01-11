import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { Values } from "../../models/Values";

const useSignIn = () => {
  // useNavigate
  const navigate = useNavigate();

  // variable
  let isUserExist = false;

  // sign in
  const onFinish = (values: Values) => {
    const usersStr = localStorage.getItem("users") as string;
    const users = JSON.parse(usersStr);

    users?.some((el: Values) => {
      if (values.login === el.login && values.password === el.password) {
        isUserExist = true;
        values.id = el.id;
        return true;
      } else {
        isUserExist = false;
        return false;
      }
    });

    if (!users || !isUserExist) {
      message.error("User doesn't exist");
    } else {
      const token =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem("token", token);

      const userIndex = users.findIndex(
        (el: { id: number }) => el.id === values.id
      );
      users[userIndex].tokens.push(token);
      localStorage.setItem("users", JSON.stringify(users));

      navigate("/");
      window.location.reload();
    }
  };

  return { onFinish };
};

export default useSignIn;
