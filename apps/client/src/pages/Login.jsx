import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAuth } from "../redux/auth/auth.slice";

function Login() {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading, token } = useSelector((state) => state.auth);
	React.useEffect(() => {
		if (token) {
			navigate("/game");
		}
	}, [token]);

	const handleFinish = (values) => {
		dispatch(loginAuth(values));
	};
	return (
		<div className="flex h-full items-center justify-center min-h-screen bg-base-200">
			<Form
				form={form}
				layout="vertical"
				className="w-10-12 sm:w-10/12 lg:w-4/12 -mt-32 flex flex-col gap-2 p-4 bg-base-100 rounded-md"
			>
				<h2 className="text-xl font-semibold text-center my-2">
					Inicia sesión para jugar
				</h2>
				<Form.Item label="Correo" name="email" required>
					<Input placeholder="usuario@example.com" />
				</Form.Item>
				<Form.Item label="Contraseña" name="password" required>
					<Input.Password placeholder="contraseña" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" block>
						Entrar
					</Button>
				</Form.Item>
				<div>
					<p>
						¿No tienes cuenta?{" "}
						<Link to={"/register"}>
							<Button type="link">Registrate aqui</Button>
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
}

export default Login;
