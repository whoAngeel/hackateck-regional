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

			<section className="bg-primary-500 py-40 text-slate-100 flex flex-col justify-center items-center gap-4 ">
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
			<div className="relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					className="absolute bottom-0 left-0 w-full "
				>
					<path
						fill="#0C3C34"
						className="fill-bg-primary-900"
						fillOpacity="1"
						d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,197.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
					></path>
				</svg>

				<footer className="bg-primary-800 text-slate-100 py-4 text-center text-xs relative z-10">
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
		</div>
	);
}

export default Home;
