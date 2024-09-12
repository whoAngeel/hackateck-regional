import { Modal, Progress, Slider, Tooltip } from "antd";
import React from "react";

function Card({ meta, recaudado, name, imageurl, onclick }) {
	const recaudadoPorcentaje = (recaudado / meta) * 100;
	return (
		<div
			className="bg-base-200 w-full rounded-lg hover:cursor-pointer overflow-hidden "
			onClick={onclick}
		>
			<img
				src={imageurl}
				className="aspect-video w-full object-cover rounded-lg hover:scale-105 hover:brightness-75 transition duration-300"
				alt=""
			/>

			<div className=" w-full">
				<Tooltip title={name}>
					<h3 className="text-2xl font-semibold py-2 truncate">{name}</h3>
				</Tooltip>
				<div className="w-full">
					<p>Meta: ${meta}</p>
					<Progress
						percent={recaudadoPorcentaje}
						format={(number) => `${number.toPrecision(3)}%`}
						percentPosition={{
							align: "start",
							type: "inner",
						}}
						size={[300, 20]}
						strokeColor="#B7EB8F"
					/>
				</div>
			</div>
		</div>
	);
}

export default Card;
