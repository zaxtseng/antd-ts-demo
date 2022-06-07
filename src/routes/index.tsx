import ProductConfig from "../pages/productConfig";
import ProductPrice from "../pages/productConfig/productPrice";
import List from "../pages/productManage/List";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

export const routes = [
    {
        path: '/list',
        element: <List />,
        key: 1
    },
    {
        path: '/config/productConfig',
        element: <ProductConfig />,
        key: 2
    },
    {
        path: '/config/productPrice',
        element: <ProductPrice />,
        key: 3
    },
]
export const menuRoutes = [
    {
        title: '商品管理',
        key: 'menu1',
        icon: <UserOutlined />,
        subMenu: [
            {
                name: '商品列表',
                path: '/list',
                element: <List />
            }
        ]
    },
    {
        title: '配置管理',
        key: 'menu2',
        icon: <NotificationOutlined />,
        subMenu: [
            {
                name: '商品管理',
                path: '/config/productConfig',
                element: <ProductConfig />
            },
            {
                name: '价格管理',
                path: '/config/productPrice',
                element: <ProductPrice />
            },
        ]
    },
]

