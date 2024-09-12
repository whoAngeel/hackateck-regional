import React, { useEffect } from "react";
import { Suspense, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";
import Earth from "../../../public/Earth";
import EarthCartoon from "../../../public/earthCarton/EarthCartoon";
import Pony from "../../../public/lowpony/Pony";
import { Environment, OrbitControls } from "@react-three/drei";
import Stat from "./../../components/Stat";
import icon from "./../../constants/icon";

const ResponsiveCamera = () => {
  const { camera, size } = useThree();
  
  useEffect(() => {
    const handleResize = () => {
      // Ajusta la posición de la cámara según el tamaño de la pantalla
      camera.position.z = size.width < 600 ? 4 : 2.5; // Por ejemplo, ajustar la posición 'z' de la cámara
      camera.updateProjectionMatrix();
    };

    handleResize(); // Llama a la función al montar el componente
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [camera, size]);

  return null; // No necesita renderizar nada
};

function Game() {
  return (
    <div className="flex flex-row sm:flex-col home" id="home">
      <div className=" text-center rounded-lg">
        <div className="bg-[#008777] p-2">
          <p className="text-white font-plight">Estadisticas</p>
        </div>

        <Stat name="Dias" icon={icon.latido} cifra="2" />
        <Stat name="Dias" icon={icon.plantado} cifra="2" />
      </div>
      <div className="w-full sm:mt-[-100px]">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
		<ResponsiveCamera />
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
