import React from "react";
import AvatarMenu from "../../components/ui/AvatarMenu";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div className="h-screen w-full bg-base-50 min-h-screen flex flex-col">
			<div className="fixed top-0 right-0 my-4 mr-4 z-10">
				<AvatarMenu />
			</div>
			<div className="flex-1">
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
