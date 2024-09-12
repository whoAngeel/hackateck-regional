import React from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Game from "../pages/game/Game";
import GameLayout from "../pages/game/GameLayout";
import ProtectedRoute from "../utils/ProtectedRoute";
import Logout from "../pages/Logout";
import LayoutFunding from "../pages/crowdfunding/Layout.jsx";
import IndexCrowdFunding from "../pages/crowdfunding/Index";
import AllFunding from "../pages/crowdfunding/All";
import Trivia from "../pages/trivia/Trivia.jsx";

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
		path: "/crowdfunding",
		element: <LayoutFunding />,
		children: [
			{
				index: true,
				element: <IndexCrowdFunding />,
			},
			{
				path: "all",
				element: <AllFunding />,
			},
			{
				path: "startnow",
				element: <StartNowFunding />,
			},
		],
	},
	{
		path: "/trivia",
		element: <Trivia />,
		children: [
			{
				index: true,
				element: <Trivia />,
			},
		],
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
	{
		path: "/logout",
		element: <Logout />,
	},

	{
		path: "*",
		element: <Home />,
	},
]);

function AppRouter() {
	return <RouterProvider router={router} />;
}

export default AppRouter;
