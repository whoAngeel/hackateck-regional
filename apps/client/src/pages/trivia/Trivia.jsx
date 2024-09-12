import React from "react";
import CardB from "../../components/ui/CardB";
import calentamiento from "../../assets/images/calentamiento.jpg";
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
          title=""
          description="Toma las mejores dediciones y dale al planeta un respiro"
          imagen={calentamiento}
        />
        <CardB
          title="Calentamiento Global"
          description="Toma las mejores dediciones y dale al planeta un respiro"
          imagen={calentamiento}
        />
      </div>
    </>
  );
}

export default Trivia;
