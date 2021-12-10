import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import {
   MenuUnfoldOutlined,
   MenuFoldOutlined,
   UnorderedListOutlined,
   LogoutOutlined,
} from '@ant-design/icons';
import useSidebar from './useSidebar';

const Sidebar: FC = () => {

   const { collapsed, toggleMenu } = useSidebar();

   return (
      <div>
         <Button type="primary" onClick={toggleMenu} style={{ marginBottom: 16 }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
         </Button>
         <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
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