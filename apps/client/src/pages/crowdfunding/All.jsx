import React from "react";
import Card from "../../components/funding/Card";
import { Button, Tooltip } from "antd";
import { GoArrowLeft, GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

function All() {
	return (
		<div className="bg-base-200 min-h-screen">
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
			<h1 className="text-3xl font-bold uppercase text-center pt-8">
				Todas las recaudaciones
			</h1>

			<div className="bg-base-200 w-10/12 mx-auto grid grid-cols-3 py-10 gap-6">
				<Card recaudado={1000} meta={1900} />
				<Card recaudado={700} meta={1200} />
				<Card recaudado={1030} meta={2900} />
				<Card recaudado={1900} meta={1900} />
			</div>
		</div>
	);
}

export default All;
