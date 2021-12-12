import { FC, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
   UnorderedListOutlined,
   FileAddOutlined,
   LogoutOutlined,
} from '@ant-design/icons';
import './style.scss';

const Sidebar: FC = () => {

   // useState
   const [matches, setMatches] = useState(window.matchMedia("(max-width: 767.98px)").matches);

   useEffect(() => {
      const handler = (e: any) => setMatches( e.matches);
      window.matchMedia("(max-width: 767.98px)").addEventListener('change', handler);
   }, [])

   const history = useHistory();
   const location = useLocation();

   const logOut = () => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      window.location.reload();
      history.push('/sign-in');
   }

   return (
      <div className="sidebar">
         <Menu
            defaultSelectedKeys={['/add-todo']}
            selectedKeys={[location.pathname]}
            mode="inline"
            theme="dark"
            inlineCollapsed={matches}
         >
            <Menu.Item key="/add-todo" icon={<FileAddOutlined />}>
               <Link to='/add-todo'>
                  Add todo
               </Link>
            </Menu.Item>
            <Menu.Item key="/todo-list" icon={<UnorderedListOutlined />}>
               <Link to='/todo-list'>
                  My Todo List
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