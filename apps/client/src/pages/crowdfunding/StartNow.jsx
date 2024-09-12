import { Button, Form, Input, InputNumber, Select, Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { GoArrowRight, GoHomeFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Alert } from "antd";
import { createFund } from "../../redux/funding/fund.slice";

function StartNow() {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onFinish = (values) => {
		console.log(values);
		dispatch(createFund(values));
		navigate("/crowdfunding/all");
	};
	return (
		<div className="w-10/12 min-h-screen pt-12 mx-auto">
			<div className="items-center w-full flex gap-4">
				<Link to={"/crowdfunding"} style={{ textDecoration: "none" }}>
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
			<div className="pt-12">
				<Form
					onFinish={onFinish}
					layout="vertical"
					style={{ maxWidth: 500 }}
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
						<InputNumber defaultValue={1} changeOnWheel min={1} />
					</Form.Item>
					<Form.Item label="Categoria" name={"category"}>
						<Select
							defaultValue={"Energias renovables"}
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
	);
}

export default StartNow;
