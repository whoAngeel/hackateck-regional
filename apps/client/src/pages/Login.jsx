import { Form } from "antd";
import React from "react";

function Login() {
	return (
		<div className="flex h-full items-center justify-center min-h-screen">
			<Form className="w-1/3 -mt-32 bg-purple-300">
				<h2 className="text-3xl">Inicia sesión para jugar</h2>
			</Form>
		</div>
	);
}

export default Login;
