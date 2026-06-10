import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Trading from "../pages/Trading";
import Revenue from "../pages/Revenue";
import CreditCard from "../pages/CreditCard";
import Group from "../pages/Group";
import Calender from "../pages/Calender";
import Setting from "../pages/Setting";
import Eye from "../pages/Eye";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "trading",
                element: <Trading />,
            },
            {
                path: "revenue",
                element: <Revenue />,
            },
            {
                path: "creditCard",
                element: <CreditCard />,
            },
            {
                path: "group",
                element: <Group />,
            },
            {
                path: "calender",
                element: <Calender />,
            },
            {
                path: "setting",
                element: <Setting />,
            },
            {
                path: "eye",
                element: <Eye />,
            },
        ],
    },
]);