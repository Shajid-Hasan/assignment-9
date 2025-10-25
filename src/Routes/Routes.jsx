import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../MainLayouts/MainLayout";
import Plants from "../Components/Plants";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import LogOut from "../Pages/LogOut";
import MyProfile from "../Pages/MyProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/plants.json'),
            },
            {
                path: '/plants',
                Component: Plants
            },
            {
                path: '/profile',
                Component: MyProfile
            },
            {
                path: '/signup',
                Component: Signup
            },
            {
                path: '/signin',
                Component: Signin
            },
            {
                path: '/logout',
                Component: LogOut
            }
        ]
    }
])