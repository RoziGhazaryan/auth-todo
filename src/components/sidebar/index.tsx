import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UnorderedListOutlined,
  FileAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import useSidebar from "./useSidebar";
import { SidebarProps } from "../../models/SidebarProps";
import "./style.scss";

const Sidebar: FC = () => {
  const { matches, location, logOut }: SidebarProps = useSidebar();

  return (
    <div className="sidebar">
      <Menu
        defaultSelectedKeys={["/add-todo"]}
        selectedKeys={[location.pathname]}
        mode="inline"
        theme="dark"
        inlineCollapsed={matches}
      >
        <Menu.Item key="/add-todo" icon={<FileAddOutlined />}>
          <Link to="/add-todo">Add todo</Link>
        </Menu.Item>
        <Menu.Item key="/todo-list" icon={<UnorderedListOutlined />}>
          <Link to="/todo-list">My Todo Lists</Link>
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logOut}>
          Log out
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default React.memo(Sidebar);
