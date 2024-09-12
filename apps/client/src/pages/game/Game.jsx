import React from "react";
import { Suspense, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Earth from "../../../public/Earth";
import EarthCartoon from "../../../public/earthCarton/EarthCartoon";
import Pony from "../../../public/lowpony/Pony";
import { Environment, OrbitControls } from "@react-three/drei";
import Stat from "./../../components/Stat";
import icon from "./../../constants/icon";
import StatCard from "../../components/ui/StatCard";

function Game() {
	return (
		<div className="flex flex-row home  " id="home">
			<StatCard />
			<div className="w-full mx-auto">
				<Canvas camera={{ position: [0, 0, 2.5] }}>
					<ambientLight />
					<OrbitControls enableZoom={false} />

					<Suspense fallback={null}>
						<EarthCartoon />
					</Suspense>
					<Environment preset="sunset" />
				</Canvas>
			</div>
			<div>
				<p className="text-white font-mono">Dias: </p>
				<p className="text-white font-mono">Esperanza de vida: </p>
				<p className="text-white font-mono ">CO2: </p>
				<p className="text-white font-mono">Nivel de mar: </p>
				<p className="text-white font-mono">Temperatura: </p>
			</div>
		</div>
	);
}

export default Game;
