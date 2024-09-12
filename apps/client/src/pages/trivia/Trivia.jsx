import React from "react";
import CardB from "../../components/ui/CardB";
import calentamiento from "../../assets/images/calentamiento.jpg";
import Juez from "../../assets/images/juez.jpg";
import Energia from "../../assets/images/energia.png";
function Trivia() {
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <button className="btn btn-ghost text-xl">Quizzes</button>
      </div>

      <p className="ml-6 font-pthin sm:w-[80%]" >Contesta quizzes y genera puntos de apoyo a tu planeta </p>
      <div className="flex p-5 sm:flex-col  pl-12">
        <CardB
          title="Calentamiento Global"
          description="Toma las mejores dediciones y dale al planeta un respiro"
          imagen={calentamiento}
        />
        <CardB
          title="Transicion e Energias Renovables"
          description="Tipos de energías renovables (solar, eólica, geotérmica, hidroeléctrica, biomasa)"
          imagen={Energia}
        />
        <CardB
          title="Política y Regulación Climática:"
          description="Regulaciones nacionales sobre emisiones de gases de efecto invernadero"
          imagen={Juez}
        />
      </div>
    </>
  );
}

export default Trivia;
