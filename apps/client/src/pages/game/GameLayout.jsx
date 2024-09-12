import React from "react";
import { Outlet } from "react-router-dom";

function GameLayout() {
	return (
		<div className="h-screen w-full bg-base-50">
			<Outlet />
		</div>
	);
}

export default GameLayout;
