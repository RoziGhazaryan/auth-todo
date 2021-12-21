import { message } from "antd";
import { useHistory } from "react-router-dom";
import { IValues } from "../../models/IValues";

const useSignIn = () => {
  // useHistory
  const history = useHistory();

  // variable
  let isUserExist = false;

  // sign in
  const onFinish = (values: IValues) => {
    const usersStr = localStorage.getItem("users") as string;
    const users = JSON.parse(usersStr);

    users?.some((el: IValues) => {
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

      history.push("/");
      window.location.reload();
    }
  };

  return { onFinish };
};

export default useSignIn;
