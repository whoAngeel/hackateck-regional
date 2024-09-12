import React from "react";
import Card from "../../components/funding/Card";
import { Button, Tooltip } from "antd";
import { GoArrowLeft, GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function All() {
	const { funds } = useSelector((state) => state.funding);
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
				{funds.map((fund) => (
					<Card
						key={fund.id}
						recaudado={fund.collected}
						meta={fund.fundingGoal}
						imageurl={fund.image}
						name={fund.name}
					/>
				))}
			</div>
		</div>
	);
}

export default All;
