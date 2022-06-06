import ProductConfig from "../pages/productConfig";
import ProductPrice from "../pages/productConfig/productPrice";
import List from "../pages/productManage/List";

const routes = [
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

export default routes