import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div className="navbar bg-primary text-white">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Juego</a>
			</div>
			<div className="flex-none">
				<div className="">
					<Link>
						<button className="btn btn-ghost btn-xs">Jugar</button>
					</Link>
					<Link>
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
