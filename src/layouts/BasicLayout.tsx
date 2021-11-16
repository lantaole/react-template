import React from "react";

import {
  Link
} from "react-router-dom";
import type { MenuClickEventHandler } from 'rc-menu/lib/interface';

import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons';

import routes from '../../config/routes'
import type { menuType } from '@/utils/commonDataTypes'

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

const Index: React.FC = (props) => {

  const handleClick: MenuClickEventHandler = (e) => {
    console.log('click ', e);
  };

  const generateMenu = (menus: menuType[]) => {
    return menus.map((item) => {
      if (Array.isArray(item.routes) && item.routes.length > 0) {

        return (
          <SubMenu key={item.path} icon={<SettingOutlined />} title={item.name}>
            {generateMenu(item.routes)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.path} icon={<AppstoreOutlined />}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      )
    })
  }

  const renderMenu = (datas: menuType[]) => {
    if ((Array.isArray(datas) && datas.length > 0) && (Array.isArray(datas[0].routes) && datas[0].routes.length > 0)) {
      const homeMenus = datas[0].routes.filter((item) => item.path === '/home');
      if ((Array.isArray(homeMenus) && homeMenus.length > 0) && (Array.isArray(homeMenus[0].routes) && homeMenus[0].routes.length > 0)) {
        const realHomeMenus = homeMenus[0].routes;
        return generateMenu(realHomeMenus);
      }
    }
    return null
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={false} >
        <div className="logo" />
        <Menu
          onClick={handleClick}
          mode="inline"
          theme="dark"
        >
          {renderMenu(routes)}
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '16px 0 0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default Index;
