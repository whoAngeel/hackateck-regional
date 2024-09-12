import React from "react";
import { Outlet } from "react-router-dom";
import AvatarMenu from "../../components/ui/AvatarMenu";

function GameLayout() {
	return (
		<div className="h-screen w-full bg-base-50">
			<div className="fixed top-0 right-0 z-10">
				<AvatarMenu />
			</div>
			<div className="flex-1">
				<Outlet />
			</div>
		</div>
	);
}

export default GameLayout;
