import { useMediaQuery } from "react-responsive";
import MainPC from "../../components/3D/MainPC";
import MainPhone from "../../components/3D/MainPhone";
<<<<<<< HEAD
import "./Game.css";
import { useState } from "react";
import "./Game.css";
import { Button } from "antd";
import { FiMessageSquare } from "react-icons/fi";
import { Fragment } from "react";
=======
import { useState } from "react";
import "./Game.css"
import {Button} from 'antd'
import {FiMessageSquare} from "react-icons/fi";
import {Fragment} from "react";
>>>>>>> 9c2b7c408d1c1b80e450aa802524bcab21fb40eb

function Game() {
	const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
	const isPC = useMediaQuery({ query: "(min-width: 768px)" });
	const [titulo, setTitulo] = useState("Hackatec 2024");

<<<<<<< HEAD
	return (
		<>
			<Button
				icon={<FiMessageSquare />}
				size="large"
				type="primary"
				shape="circle"
				className="fixed top-0 left-0 mt-4 ml-4 z-10"
			/>
			<div className="absolute bottom-0 mx-auto w-full text-center sm:hidden">
				<h1 className="text-white font-psemibold text-3xl ">{titulo}</h1>
				<h5 className="text-white font-plight md:text-sm">
					Pulsa sobre cualquier avion
				</h5>
			</div>
			{isMobile && <MainPhone />} {/* Carga componente para móviles */}
			{isPC && <MainPC setTitulo={setTitulo} />}{" "}
			{/* Carga componente para PCs */}
		</>
	);
=======

    return (
        <>
            <Button icon={<FiMessageSquare/>} size="large" type="primary" shape="circle" className="fixed top-0 left-0 mt-4 ml-4 z-10"/>
            <div className="absolute bottom-0 mx-auto w-full text-center sm:hidden">
                <h1 className="text-white font-psemibold text-3xl ">{titulo}</h1>
                <h5 className="text-white font-plight md:text-sm">Pulsa sobre cualquier avion</h5>
            </div>
            {isMobile && <MainPhone setTitulo={setTitulo} />} {/* Carga componente para móviles */}
            {isPC && <MainPC setTitulo={setTitulo}/>} {/* Carga componente para PCs */}
        </>

    );
>>>>>>> 9c2b7c408d1c1b80e450aa802524bcab21fb40eb
}

export default Game;
