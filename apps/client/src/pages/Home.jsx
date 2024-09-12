import React, { useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import { useNavigate } from "react-router-dom";
import useAuth from "../utils/useAuth";
import { logout } from "../redux/auth/auth.slice";
import { useDispatch } from "react-redux";

function Home() {
	const navigate = useNavigate();
	const isAuthenticated = useAuth();
	const dispatch = useDispatch();
	const handleStart = () => {
		if (isAuthenticated) {
			// Si el usuario está autenticado, lo envías al juego
			navigate("/game");
		} else {
			// Si no está autenticado, lo envías al registro
			navigate("/login");
		}
	};
	// useEffect(() => {
	// 	dispatch(logout());
	// }, []);
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />

			{/* Hero section */}
			<div className="flex-1  flex flex-col items-center justify-center bg-base-50 bg-hero-pattern bg-cover bg-center text-center  min-h-screen p-4">
				<h1 className="text-4xl font-bold ">
					Salva el planeta con GreenGuardian
				</h1>
				<h2 className="text-lg  mt-4">
					Un emocionante juego sobre el cambio climático y la conservación
					del medio ambiente
				</h2>
				<button
					onClick={handleStart}
					className="mt-6 px-8 py-3 bg-primary-500 text-white rounded-md hover:bg-secondary-600"
				>
					Comenzar
				</button>
			</div>

			{/* caracteristicas section */}

			<section className="bg-info-700  py-12">
				<h2 className="text-3xl text-center font-medium">
					{" "}
					Caracteristicas del juego
				</h2>
			</section>

			<section className="bg-primary-500 py-12 text-slate-100 flex flex-col justify-center items-center gap-4">
				<h2 className="text-3xl text-center font-medium">
					¿Estas listo para salvar el planeta?
				</h2>
				<div>
					<button
						className="btn btn-wide bg-secondary-500 hover:bg-secondary-600 text-slate-900 "
						onClick={handleStart}
					>
						Comienza a ahora
					</button>
				</div>
			</section>

			{/* footer section */}
			<footer className="bg-neutral-700 text-neutral-content  py-4 text-center text-xs">
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
