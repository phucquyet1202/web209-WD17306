import ListProduct from "@/components/productList/productList";
import Count from "@/redux/count";
import Product from "@/redux/product";
import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/", element: <div>Home Page <Outlet /></div>, children: [
            {
                index: true,
                element: <Navigate to="product" />
            },
            {
                path: "product",
                element: <Product />
            },
            { path: "counter", element: <Count /> }
        ]
    },
    {
        path: "/admin",
        element: (
            <div>
                Layout Admin <Outlet />
            </div>
        ),
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" />,
            },
            {
                path: "dashboard",
                element: <div>Dashboard</div>,
            },
            {
                path: "product",
                element: <div>Product List</div>,
            },
            {
                path: "product/:id",
                element: <div>Product Detail</div>,
            },
        ],
    },
]);