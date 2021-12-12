import { FC, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
   UnorderedListOutlined,
   FileAddOutlined,
   LogoutOutlined,
} from '@ant-design/icons';
import './style.scss';

const Sidebar: FC = () => {

   const history = useHistory();
   const location = useLocation();

   const logOut = () => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      window.location.reload();
      history.push('/sign-in');
   }

   useEffect(() => {
      console.log(location.pathname);
   }, [location.pathname]);

   return (
      <div className="sidebar">
         <Menu
            defaultSelectedKeys={[location.pathname]}
            mode="inline"
            theme="dark"
         >
            <Menu.Item key="/todo-list" icon={<UnorderedListOutlined />}>
               <Link to='/todo-list'>
                  My Todo List
               </Link>
            </Menu.Item>
            <Menu.Item key="/add-todo" icon={<FileAddOutlined />}>
               <Link to='/add-todo'>
                  Add todo
               </Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logOut}>
               Log out
            </Menu.Item>
         </Menu>
      </div>
   );
}

export default Sidebar;