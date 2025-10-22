import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import MainLayout from "../MainLayouts/MainLayout";

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
                path: '/my-profile',
                Component: MyProfile
            }
        ]
    }
])