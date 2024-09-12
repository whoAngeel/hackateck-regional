import React from "react";
import Stat from "../Stat";
import icon from "../../constants/icon";

function StatCard() {
	return (
		<div className=" bg-primary-500">
			<p className="text-white font-semibold text-center">Estadisticas</p>
			<div className="w-full flex justify-center flex-col items-center">
				<Stat name="Dias" icon={icon.latido} cifra="2" />
				<Stat name="Dias" icon={icon.plantado} cifra="2" />
			</div>
		</div>
	);
}

export default StatCard;
