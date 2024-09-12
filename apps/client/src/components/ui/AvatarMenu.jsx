import { Avatar, Button, Dropdown, Space } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AvatarMenu() {
	const { user } = useSelector((state) => state.auth);
	const items = [
		{
			key: "1",
			label: (
				<Space direction="vertical" align="center">
					<p className=" font-semibold">{user.fullName}</p>
					<p className="text-sm">{user.email}</p>
				</Space>
			),
		},
		{
			key: "2",
			danger: true,
			label: <Link to={"/logout"}>Cerrar sesión</Link>,
		},
	];

	return (
		<Dropdown menu={{ items }}>
			<Avatar
				className="cursor-pointer bg-success-300"
				size={{
					xs: 38,
					sm: 38,
					md: 48,
					lg: 64,
					xl: 70,
					xxl: 100,
				}}
			>
				{user.fullName[0]}
			</Avatar>
		</Dropdown>
	);
}

export default AvatarMenu;
