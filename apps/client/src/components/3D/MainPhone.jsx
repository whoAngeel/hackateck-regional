import React, { useEffect } from "react";
import { Suspense, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import Earth from "../../../public/Earth";
import EarthCartoon from "../../../public/earthCarton/EarthCartoon";
import Pony from "../../../public/lowpony/Pony";
import { Environment, OrbitControls, Stars, Text } from "@react-three/drei";
import Stat from "./../../components/Stat";
import icon from "./../../constants/icon";
import StatCard from "../../components/ui/StatCard";
import { Sprite, SpriteMaterial, TextureLoader } from "three";
import Board from "../../../public/board/Board";
import Arrow from "../../../public/arrow/Arrow";

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

function MainPhone() {
  return (
    <div className="flex flex-row md:flex-col home  bg-black" id="home">
      <div className="w-full mx-auto md:mt-[-150px]">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <ResponsiveCamera />
          <ambientLight />
          <OrbitControls enableZoom={false} />

          <Suspense fallback={null}>
            <mesh scale={[0.002, 0.002, 0.002]} position={[-.5, -2.8, 0.5]}>
              <Board />
            </mesh>
            <mesh position={[0, -1.7, 0.5]}>
              <boxGeometry args={[0.82, 1, 0.01]} />
              <meshStandardMaterial color={"#38ad30"} />
              {/* Texto dentro de la malla */}

              <Text
                position={[0, 0.4, 0.03]} // Ajusta la posición del texto en la malla
                fontSize={0.07} // Tamaño del texto
                color="#ffffff" // Color del texto
                anchorX="center" // Alineación horizontal
                anchorY="middle" // Alineación vertical
                fontWeight="bold"
              >
                Estadisticas
              </Text>

              <Text
                position={[0, 0.25, 0.03]} // Ajusta la posición del texto en la malla
                fontSize={0.06} // Tamaño del texto
                color="#ffffff" // Color del texto
                anchorX="center" // Alineación horizontal
                anchorY="middle" // Alineación vertical
                fontWeight="bold"
              >
                Dias: 2
              </Text>
              <Text
                position={[0, 0.15, 0.03]} // Ajusta la posición del texto en la malla
                fontSize={0.06} // Tamaño del texto
                color="#ffffff" // Color del texto
                anchorX="center" // Alineación horizontal
                anchorY="middle" // Alineación vertical
                fontWeight="bold"
              >
                Co2: 2
              </Text>
              <Text
                position={[0, 0.05, 0.03]} // Ajusta la posición del texto en la malla
                fontSize={0.06} // Tamaño del texto
                color="#ffffff" // Color del texto
                anchorX="center" // Alineación horizontal
                anchorY="middle" // Alineación vertical
                fontWeight="bold"
              >
                Esperanza de Vida: 2
              </Text>
              <Text
                position={[0, -0.05, 0.03]} // Ajusta la posición del texto en la malla
                fontSize={0.06} // Tamaño del texto
                color="#ffffff" // Color del texto
                anchorX="center" // Alineación horizontal
                anchorY="middle" // Alineación vertical
                fontWeight="bold"
              >
                Temperatura: 2C
              </Text>
            </mesh>
            
            <mesh position={[0,0.2,0]}>
              <EarthCartoon />
            </mesh>
          </Suspense>
          <Stars
            radius={200}
            depth={100}
            count={500}
            factor={20}
            saturation={0}
            fade
            speed={1}
          />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}
export default MainPhone;
