import React from "react";
import CardB from "../../components/ui/CardB";
import calentamiento from "../../assets/images/calentamiento.jpg"
function Trivia() {
  return(
    <>
    <div>
      <h1>Trivia</h1>
      <h5>Consigue puntos que ayuden a tu planeta a mejorar</h5>
    </div>
    <div className="flex p-5 sm:flex-col  pl-12">
    <CardB title="Calentamiento Global"
      description="Toma las mejores dediciones y dale al planeta un respiro"
      imagen={calentamiento}/>
      <CardB title="Calentamiento Global"
      description="Toma las mejores dediciones y dale al planeta un respiro"
      imagen={calentamiento}/>
      <CardB title="Calentamiento Global"
      description="Toma las mejores dediciones y dale al planeta un respiro"
      imagen={calentamiento}/>
    </div>
      
    </>
  );
}

export default Trivia;
