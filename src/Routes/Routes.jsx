import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import MainLayout from "../MainLayouts/MainLayout";
import Plants from "../Components/Plants";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/plants',
                Component: Plants
            },
            {
                path: '/my-profile',
                Component: MyProfile
            },
            {
                path: '/signup',
                Component: Signup
            },
            {
                path: '/signin',
                Component: Signin
            }
        ]
    }
])