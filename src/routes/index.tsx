/* eslint-disable react-refresh/only-export-components */

import {
    createBrowserRouter,
} from "react-router-dom";
import {ROUTES} from "@/config/routes.ts";
import {lazy} from "react";
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Trading = lazy(() => import("@/pages/Trading/Trading.tsx"));
const Revenue = lazy(() => import("@/pages/Revenue"));
const CreditCard = lazy(() => import("@/pages/CreditCard"));
const Group = lazy(() => import("@/pages/Group"));
const Calendar = lazy(() => import("@/pages/Calendar"));
const Setting = lazy(() => import("@/pages/Setting"));
const Eye = lazy(() => import("@/pages/Eye"));

export const router = createBrowserRouter([
    {
        path: ROUTES.dashboard,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: ROUTES.trading,
                element: <Trading />,
            },
            {
                path: ROUTES.revenue,
                element: <Revenue />,
            },
            {
                path: ROUTES.creditCard,
                element: <CreditCard />,
            },
            {
                path: ROUTES.customers,
                element: <Group />,
            },
            {
                path: ROUTES.calendar,
                element: <Calendar />,
            },
            {
                path: ROUTES.settings,
                element: <Setting />,
            },
            {
                path: ROUTES.visibility,
                element: <Eye />,
            },
        ],
    },
]);