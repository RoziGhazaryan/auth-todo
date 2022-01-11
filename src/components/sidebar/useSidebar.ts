import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useSidebar = () => {
  // useState
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 767.98px)").matches
  );

  // useEffect
  useEffect(() => {
    const handler = (e: { matches: boolean }) => setMatches(e.matches);
    window
      .matchMedia("(max-width: 767.98px)")
      .addEventListener("change", handler);
  }, []);

  // useNavigate
  const navigate = useNavigate();

  // useLocation
  const location = useLocation();

  // logout function
  const logOut = () => {
    // localStorage
    const usersStr = localStorage.getItem("users") as string;
    const users = JSON.parse(usersStr);
    const token = sessionStorage.getItem("token");
    const userIndex = users.findIndex((el: { tokens: Array<string | null> }) =>
      el.tokens.includes(token)
    );

    users[userIndex].tokens.splice(users[userIndex].tokens.indexOf(token), 1);

    localStorage.setItem("users", JSON.stringify(users));

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    window.location.reload();

    // navigate
    navigate("/sign-in");
  };

  return {
    matches,
    location,
    logOut,
  };
};

export default useSidebar;
