import { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import {
   UnorderedListOutlined,
   LogoutOutlined,
} from '@ant-design/icons';
import './style.scss';

const Sidebar: FC = () => {

   const history = useHistory();

   const logOut = () => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      window.location.reload();
      history.push('/sign-in');
   }

   return (
      <div className="sidebar">
         <Menu
            defaultSelectedKeys={['todo']}
            mode="inline"
            theme="dark"
         >
            <Menu.Item key="todo" icon={<UnorderedListOutlined />}>
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