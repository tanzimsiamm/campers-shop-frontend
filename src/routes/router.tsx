import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import ProductManagement from "../pages/ProductManagement";
import Products from "../pages/Products";
import CheckOut from "../pages/CheckOut";
import OrderSuccess from "../components/ui/order/OrderSucces";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: '/products/:productId',
                element: <ProductDetails />
            },
            {
                path: 'product-management',
                element: <ProductManagement />
            },
            {
                path: 'checkout',
                element: <CheckOut />
            },
            {
                path: '/order-successful',
                element: <OrderSuccess/>
            },
            {
                path: 'products',
                element: <Products />
            },
        ]
    },
]);

export default router;