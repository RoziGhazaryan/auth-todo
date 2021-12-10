import { useState } from "react";

const useSidebar = () => {
   // useState
   const [collapsed, setCollapsed] = useState(false);

   // functions
   const toggleMenu = () => {
      setCollapsed(!collapsed);
   };

   return {
      collapsed,
      toggleMenu,
   }
}

export default useSidebar;