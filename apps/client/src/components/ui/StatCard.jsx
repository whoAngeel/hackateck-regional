import React from "react";
import Stat from "../Stat";
import icon from "../../constants/icon";

function StatCard() {
	return (
		<div className=" bg-primary-500">
			<p className="text-white font-semibold text-xl text-center">Estadisticas</p>
			<div className="w-full flex justify-start flex-col pl-2 mt-5">
				<Stat name="Dias" icon={icon.latido} cifra="2" />
				<Stat name="Co2" icon={icon.plantado} cifra="2" />
				<Stat name="Esperanza de vida" icon={icon.cronometro} cifra="2000 años" />
				<Stat name="Temperatura" icon={icon.temperatura} cifra="2 C" />
			</div>
		</div>
	);
}

export default StatCard;
