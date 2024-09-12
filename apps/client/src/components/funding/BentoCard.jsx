import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

function BentoCard({ titulo, descripcion, recaudado, meta, img }) {
	return (
		<div className="relative bg-base-200 w-full h-full shadow-xl rounded-xl overflow-hidden">
			<img
				src={img}
				alt="Shoes"
				className="w-full h-full object-cover rounded-md hover:scale-105 hover:brightness-75 transition duration-300"
			/>

			<div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-stone-800 w-full flex justify-between text-white">
				<p className="text-white">{titulo}</p>
				<p>
					Recaudado ${recaudado} / ${meta}
				</p>
			</div>
		</div>
	);
}

export default BentoCard;
