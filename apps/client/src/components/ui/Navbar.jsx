import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../utils/useAuth";
function Navbar() {
	const navigate = useNavigate();
	const isAuthenticated = useAuth();

	const handleStart = () => {
		if (isAuthenticated) {
			// Si el usuario está autenticado, lo envías al juego
			navigate("/game");
		} else {
			// Si no está autenticado, lo envías al registro
			navigate("/login");
		}
	};
	return (
		<div className="navbar bg-primary-500 text-primary-50">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">GreenGuardian</a>
			</div>
			<div className="flex-none">
				<div className="">
					<Link>
						<button
							className="btn btn-ghost btn-xs"
							onClick={handleStart}
						>
							Jugar
						</button>
					</Link>
					<Link to={"/register"}>
						<button className="btn btn-ghost btn-xs">Registrarse</button>
					</Link>
					<Link>
						<button className="btn btn-ghost btn-xs">Acerca de</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
