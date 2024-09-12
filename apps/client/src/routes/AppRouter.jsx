import React from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Game from "../pages/game/Game";
import GameLayout from "../pages/game/GameLayout";
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
				<GameLayout />
			</ProtectedRoute>
		),
		children: [
			{
				index: true,
				element: <Game />,
			},
		],
	},
]);

function AppRouter() {
	return <RouterProvider router={router} />;
}

export default AppRouter;
