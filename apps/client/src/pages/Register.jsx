import { Button, Form, Input, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearError, registerAuth } from "../redux/auth/auth.slice";
import Cookie from "js-cookie";
function Register() {
	const [form] = Form.useForm();
	const [clientReady, setClientReady] = React.useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isLoading, token, error } = useSelector((state) => state.auth);
	const [messageApi, contextHolder] = message.useMessage();
	function onFinish(values) {
		dispatch(registerAuth(values));
	}

	React.useEffect(() => {
		if (error) {
			messageApi.error("Error al registrar usuario");
			dispatch(clearError());
		}
	}, [error, dispatch, messageApi]);

	React.useEffect(() => {
		setClientReady(true);
	}, []);

	React.useEffect(() => {
		if (token) {
			navigate("/game");
		}
	}, [token]);

	return (
		<div className="flex items-center justify-center min-h-screen bg-base-200">
			{contextHolder}
			<Form
				onFinish={onFinish}
				form={form}
				layout="vertical"
				className="w-10-12 sm:w-10/12 lg:w-4/12 -mt-32 flex flex-col gap-2 p-4 bg-base-100 rounded-md"
			>
				<h2 className="text-xl font-semibold text-center my-2">
					Crear una cuenta nueva
				</h2>
				<Form.Item label="Nombre" name="fullname" required>
					<Input placeholder="Juan Perez" />
				</Form.Item>
				<Form.Item label="Correo" name="email" required>
					<Input placeholder="usuario@example.com" />
				</Form.Item>
				<Form.Item label="Contraseña" name="password" required>
					<Input.Password placeholder="***********" />
				</Form.Item>
				<Form.Item shouldUpdate>
					{() => (
						<Button
							type="primary"
							block
							htmlType="submit"
							loading={isLoading}
							disabled={
								!clientReady ||
								!form.isFieldsTouched(true) ||
								!!form
									.getFieldsError()
									.filter(({ errors }) => errors.length).length
							}
						>
							{isLoading ? (
								<span>Registrando...</span>
							) : (
								<span>Registrar</span>
							)}
						</Button>
					)}
				</Form.Item>
				<div>
					<p>
						Ya tienes una cuenta?{" "}
						<Link to={"/login"}>
							<Button type="link">Inicia sesión aqui</Button>
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
}

export default Register;
