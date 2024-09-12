import { useMediaQuery } from "react-responsive";
import MainPC from "../../components/3D/MainPC";
import MainPhone from "../../components/3D/MainPhone";

function Game() {
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isPC = useMediaQuery({ query: '(min-width: 768px)' });
  return (
	<>
      {isMobile && <MainPhone/>} {/* Carga componente para móviles */}
      {isPC && <MainPC/>} {/* Carga componente para PCs */}
    </>
	
  );
}

export default Game;
