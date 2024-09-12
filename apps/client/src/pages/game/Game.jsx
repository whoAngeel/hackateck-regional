import {useMediaQuery} from "react-responsive";
import MainPC from "../../components/3D/MainPC";
import MainPhone from "../../components/3D/MainPhone";
import "./Game.css";
import { useState } from "react";


function Game() {
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    const isPC = useMediaQuery({query: '(min-width: 768px)'});
    const [titulo, setTitulo] = useState("Hackatec 2024");
    



    return (
        <>
            <div className="absolute bottom-0 mx-auto w-full text-center sm:hidden">
                <h1 className="text-white font-psemibold text-3xl ">{titulo}</h1>
                <h5 className="text-white font-plight md:text-sm">Pulsa sobre cualquier avion</h5>
            </div>
            {isMobile && <MainPhone setTitulo={setTitulo} />} {/* Carga componente para móviles */}
            {isPC && <MainPC setTitulo={setTitulo}/>} {/* Carga componente para PCs */}
        </>

    );
}

export default Game;
