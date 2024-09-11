import React from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Game from "../pages/Game";
import ProtectedRoute from "../utils/ProtectedRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/game",
		element: (
			<ProtectedRoute>
				<Game />
			</ProtectedRoute>
		),
	},
]);

function AppRouter() {
	return <RouterProvider router={router} />;
}

export default AppRouter;
