import { Button, Tooltip } from "antd";
import React from "react";
import { GoArrowRight, GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

function StartNow() {
	return (
		<div className="w-10/12 min-h-screen flex py-20 mx-auto">
			<div className="fixed top-0 left-0 mt-4 ml-4">
				<Tooltip title="Regresar">
					<Link to={"/crowdfunding"} style={{ textDecoration: "none" }}>
						<Button
							type="primary"
							shape="circle"
							size="large"
							icon={<GoHomeFill />}
						/>
					</Link>
				</Tooltip>
			</div>
			<div className="w-full">
				<h2 className="text-2xl font-bold uppercase ">Crea tu campaña</h2>

				<div className="bg-base-300 w-full py-8 my-4 px-8 rounded-xl">
					<h2 className="text-2xl font-bold uppercase ">
						Antes de empezar
					</h2>
					<p>
						Asegurate de tener toda tu información necesaria sobre tu
						proyecto, incluyendo una descripcion detallada, imagenes,
						etc.
					</p>
				</div>
				<div className="w-full flex items-center justify-center">
					<Button type="primary" size="large">
						Comienza tu campaña de recaudación <GoArrowRight />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default StartNow;
