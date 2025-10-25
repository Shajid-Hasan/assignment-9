import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../MainLayouts/MainLayout";
import Plants from "../Components/Plants";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import LogOut from "../Pages/LogOut";
import MyProfile from "../Pages/MyProfile";
import PlantsDetails from "../Pages/PlantsDetails";

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
                Component: Plants,
                loader: () => fetch('/plants.json'),
            },
            {
                path: '/plantsdetails/:id',
                Component: PlantsDetails,
                loader: () => fetch('/plants.json'),
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


