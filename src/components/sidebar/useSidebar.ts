import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const useSidebar = () => {
  // useState
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 767.98px)").matches
  );

  // useEffect
  useEffect(() => {
    const handler = (e: any) => setMatches(e.matches);
    window
      .matchMedia("(max-width: 767.98px)")
      .addEventListener("change", handler);
  }, []);

  // useHistory
  const history = useHistory();

  // useLocation
  const location = useLocation();

  console.log("*******", location);

  // logout function
  const logOut = () => {
    // localStorage
    const usersStr = localStorage.getItem("users") as string;
    const users = JSON.parse(usersStr);
    const token = sessionStorage.getItem("token");
    const userIndex = users.findIndex((el: any) => el.tokens.includes(token));

    users[userIndex].tokens.splice(users[userIndex].tokens.indexOf(token), 1);

    localStorage.setItem("users", JSON.stringify(users));

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    window.location.reload();

    // history
    history.push("/sign-in");
  };

  return {
    matches,
    location,
    logOut,
  };
};

export default useSidebar;
