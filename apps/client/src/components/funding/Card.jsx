import { Progress, Slider } from "antd";
import React from "react";

function Card({ meta, recaudado }) {
	const recaudadoPorcentaje = (recaudado / meta) * 100;
	return (
		<div className="bg-base-200 w-full rounded-lg">
			<img
				src="https://picsum.photos/300/200"
				className="aspect-video w-full rounded-lg"
				alt=""
			/>

			<div className=" w-full">
				<h3 className="text-2xl font-semibold py-2">Titulo</h3>
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
