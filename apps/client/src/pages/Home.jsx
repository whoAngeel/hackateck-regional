import React from "react";
import Navbar from "../components/ui/Navbar";

function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />

			{/* Hero section */}
			<div className="flex-1  flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center text-center  min-h-screen p-4">
				<h1 className="text-4xl font-bold ">
					Salva el planeta con GreenGuardian
				</h1>
				<h2 className="text-lg  mt-4">
					Un emocionante juego sobre el cambio climático y la conservación
					del medio ambiente
				</h2>
				<button className="mt-6 px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
					Comenzar
				</button>
			</div>

			{/* caracteristicas section */}

			<section className="bg-success  py-12">
				<h2 className="text-3xl text-center font-medium">
					{" "}
					Caracteristicas del juego
				</h2>
			</section>

			<section className="bg-green-400 py-12 text-slate-100 flex flex-col justify-center items-center gap-4">
				<h2 className="text-3xl text-center font-medium">
					¿Estas listo para salvar el planeta?
				</h2>
				<button className="btn bg-green-100 w-1/2">Comienza a ahora</button>
			</section>

			{/* footer section */}
			<footer className="bg-neutral text-neutral-content  py-4 text-center text-xs">
				<div>
					<p>
						&copy; {new Date().getFullYear()} 5T. Todos los derechos
						reservados.
					</p>
					<div className="mt-4">
						<a href="#" className="hover:underline">
							Política de privacidad
						</a>{" "}
						|{" "}
						<a href="#" className="hover:underline">
							Términos de servicio
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
