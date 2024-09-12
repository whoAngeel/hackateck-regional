import { Button, Form, Input, InputNumber, Select, Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import svgImage from "../../assets/images/descarga.svg";
import { createFund } from "../../redux/funding/fund.slice";
function StartNow() {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	// const { Option } = Select;
	const dispatch = useDispatch();

	const onFinish = (values) => {
		dispatch(createFund(values));
		navigate("/crowdfunding/all");
	};

	return (
		<div className="flex flex-col custom-lg:flex-row w-full min-h-screen ">
			{/* Sección del formulario */}
			<div className="custom-lg:w-1/2 w-full flex justify-center items-center p-8">
				<div className="w-full max-w-md">
					<div className="flex items-center mb-8 gap-4">
						<Link
							to={"/crowdfunding"}
							style={{ textDecoration: "none" }}
						>
							<div className="hover:bg-base-300 rounded-full sm:h-8 sm:w-8 h-12 w-12 grid place-items-center">
								<Tooltip title="Regresar" placement="bottomRight">
									<FaAngleLeft />
								</Tooltip>
							</div>
						</Link>
						<h2 className="sm:text-xl text-2xl font-bold uppercase">
							Crea tu campaña
						</h2>
					</div>
					<Form
						initialValues={{
							fundingGoal: 1,
							category: "Energias limpias",
						}}
						onFinish={onFinish}
						layout="vertical"
						className="bg-success-100 rounded-lg p-8"
					>
						<Form.Item
							label="Nombre de tu campaña"
							name={"name"}
							required
							rules={[
								{
									required: true,
									message: "Ingresa el nombre de tu campaña",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Descripción de tu campaña"
							name={"description"}
						>
							<Input.TextArea />
						</Form.Item>
						<Form.Item label="Meta esperada" name={"fundingGoal"}>
							<InputNumber changeOnWheel min={1} />
						</Form.Item>
						<Form.Item label="Categoria" name={"category"}>
							<Select
								options={[
									{
										value: "Energias limpias",
										label: "Energias limpias",
									},
									{
										value: "Energias renovables",
										label: "Energias renovables",
									},
									{
										value: "Cambio Climatico",
										label: "Cambio climatico",
									},
								]}
							/>
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" block>
								Comenzar
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>

			{/* Sección de la imagen */}
			<div className="hidden custom-lg:flex justify-center items-center bg-gray-100 custom-lg:w-1/2 w-full">
				<img src={svgImage} alt="Campaña" className="w-full h-auto" />
			</div>
		</div>
	);
}

export default StartNow;
