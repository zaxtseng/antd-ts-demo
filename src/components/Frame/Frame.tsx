import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { menuRoutes } from '../../routes'
// import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const Frame = (props: any) => {
    const to = useNavigate();

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <h1 style={{ color: 'white' }}>后台管理系统</h1>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    {/* <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                    items={items2}
                /> */}
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                    >
                        {
                            menuRoutes.map(route => (
                                <SubMenu key={route.key} icon={route.icon} title={route.title}>
                                    {
                                        route.subMenu.map(subMenu => (
                                            <Menu.Item key={subMenu.path} onClick={() => to(subMenu.path)}>{subMenu.name}</Menu.Item>
                                        ))
                                    }
                                </SubMenu>
                            ))
                        }
                    </Menu>
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
};

export default Frame;