import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import {
   UnorderedListOutlined,
   LogoutOutlined,
} from '@ant-design/icons';
import './style.scss';

const Sidebar: FC = () => {
   return (
      <div className="sidebar">
         <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
         >
            <Menu.Item key="todo" icon={<UnorderedListOutlined />}>
               <Link to='/todo-list'>
                  My Todo List
               </Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
               <Link to='/login'>
                  Log out
               </Link>
            </Menu.Item>
         </Menu>
      </div>
   );
}

export default Sidebar;