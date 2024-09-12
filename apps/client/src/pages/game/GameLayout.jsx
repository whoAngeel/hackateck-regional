import React from "react";
import { Outlet } from "react-router-dom";
import AvatarMenu from "../../components/ui/AvatarMenu";
import AvatarGroup from "../../components/ui/AvatarGroup";
import Moneda from '../../assets/images/moneda.png'

function GameLayout() {
	return (
		<div className="h-screen w-full bg-base-50">
			<div className="fixed top-0 right-0 my-4 mr-20 z-10 h-5 md:mr-5 flex flex-row-reverse">
				<AvatarMenu />
				<img src={Moneda} className="h-9"/>
				<p className="text-white mt-2">200</p>
				
			</div>
			
			<div className="flex-1">
				<Outlet />
			</div>
			
		</div>
	);
}

export default GameLayout;
