import React from "react";

function CardB({ title, description, imagen }) {
  return (
    <>
      <div className="card card-compact bg-base-100 w-64 shadow-xl m-5 sm:mx-0">
        <figure>
          <img src={imagen} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Iniciar Cuestionario</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardB;
