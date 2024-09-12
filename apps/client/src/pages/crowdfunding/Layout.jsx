import React from "react";
import AvatarMenu from "../../components/ui/AvatarMenu";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div className="h-screen w-full bg-base-50 min-h-screen flex flex-col">
			<AvatarMenu />
			<div className="flex-1">
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
