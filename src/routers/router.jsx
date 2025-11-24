import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/home/Home";
import CategoryPage from "../pages/Category/CategoryPage";
import Search from "../pages/Search/Search";
import ShopPage from "../pages/Shop/ShopPage/ShopPage";
import ProductDetails from "../pages/Shop/ProductDetails/ProductDetails";
import LogIn from "../components/LogIn";
import RegisterForm from "../components/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/categories/:categoryName', element: <CategoryPage></CategoryPage>
            },
            {
                path: '/search', 
                element: <Search/>
            },
            {
                path: '/shop', 
                element: <ShopPage/>
            },
            {
                path: '/shop/:id', 
                element: <ProductDetails/>
            },
        ]
    },
    {
        path: '/login',
        element: <LogIn/>
    },
    {
        path: '/register',
        element: <RegisterForm/>
    }
]);
export default router