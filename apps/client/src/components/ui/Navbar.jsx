import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../utils/useAuth";

function Navbar() {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();
    const handleStart = () => {
        if (isAuthenticated) {
            navigate("/game");
        } else {
            navigate("/login");
        }
    };
    return (
        <div className="navbar bg-transparent text-primary-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl sm:text-lg">EnerGreen</a>
            </div>
            <div className="flex-none">
                <div className="">
                    <button
                        className="btn btn-ghost btn-xs hover:underline"
                        onClick={handleStart}
                    >
                        Jugar
                    </button>
                    <Link to={"/register"}>
                        <button className="btn btn-ghost btn-xs hover:underline">Entrar / Registrarse</button>
                    </Link>
                    <Link to={"/nosotros"}>
                        <button className="btn btn-ghost btn-xs hover:underline">Nosotros</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
