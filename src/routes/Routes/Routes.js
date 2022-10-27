import { createBrowserRouter } from "react-router-dom";
import RightSideNav from "../../componenet/RightSideNav";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Description from "../../Pages/Description/Description/Description";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>,
            },
            {
                path: '/category',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
            },
            {
                path: '/category/:id',
                element: <RightSideNav></RightSideNav>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: 'details/:id',
                element: <Description></Description>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/faq',
                element: <PrivateRoute><FAQ></FAQ></PrivateRoute>,
            }
        ]
    },
    {
        path: '*',
        element: <div><h1>This route  are not found :: 404</h1></div>
    }

])