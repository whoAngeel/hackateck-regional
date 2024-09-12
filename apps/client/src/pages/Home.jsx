import Navbar from "../components/ui/Navbar";
import {useNavigate} from "react-router-dom";
import useAuth from "../utils/useAuth";
import backgroundImage from "../assets/images/bg-hero.jpg"
import friendsImage from "../assets/images/friends.svg"
import foundingImage from "../assets/images/investor.svg"
import projectImage from "../assets/images/project.svg"
import energyImage from "../assets/images/energy.svg"

const Footer = () => {
    return (
        <footer className="bg-primary-900 text-white py-8 w-full flex flex-col items-center">
            <div className="flex flex-col items-center space-y-4">
                <p className="text-lg font-semibold">EnerGreen © 2024</p>
                <p className="text-sm">Todos los derechos reservados.</p>
                <div className="flex space-x-6 sm:mx-3">
                    <a href="#" className="hover:underline">Términos de Servicio</a>
                    <a href="#" className="hover:underline">Política de Privacidad</a>
                    <a href="#" className="hover:underline">Contacto</a>
                </div>
            </div>
        </footer>
    );
};


function Home() {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();
    const handleStart = () => {
        if (isAuthenticated) {
            navigate("/game");
        } else {
            navigate("/login");
        }
    };

    let div = <>
        <div className="flex flex-col">
            <section className="flex flex-col h-screen w-full bg-cover bg-no-repeat"
                     style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className="bg-black/50">
                    <Navbar/>
                    <div
                        className=" flex-1 flex flex-col items-center justify-center bg-transparent bg-cover bg-center text-center text-white min-h-screen p-4">
                        <h1 className="text-4xl font-bold ">
                            Salva el planeta con EnerGreen
                        </h1>
                        <h2 className="text-lg  mt-4">
                            Un emocionante juego sobre el cambio climático y la concientización
                            del medio ambiente
                        </h2>
                        <button
                            onClick={handleStart}
                            className="mt-6 px-8 py-3 bg-primary-500 text-white rounded-md hover:bg-secondary-600"
                        >
                            Comenzar
                        </button>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-around min-h-screen w-full bg-primary-700 py-2">
                <img src={energyImage} alt="EnerGreen Logo" className="w-full h-64 object-cover rounded-lg shadow-lg"/>
                <div className="px-4 text-white">
                    <h1 className="text-5xl font-bold mb-6">¿Qué es EnerGreen?</h1>
                    <p className="text-lg text-justify">
                        EnerGreen es una plataforma educativa que tiene como objetivo crear conciencia sobre el cambio
                        climático. A través de experiencias interactivas, queremos que personas de todas las edades se
                        conviertan en defensores del planeta.
                    </p>
                </div>
            </section>

            <section className="flex flex-col justify-around min-h-screen w-full bg-white py-2">

                <div className="px-4 text-primary-800">
                    <h1 className="text-5xl font-bold mb-6">Guardianes del Planeta</h1>
                    <p className="text-lg text-justify">
                        Un juego interactivo donde los jugadores completan quizes y trivias sobre el medio ambiente para
                        ganar puntos. Estos puntos se usan para cuidar una mascota virtual: un planeta Tierra. Además,
                        puedes invitar a tus amigos para mantener juntos al planeta sano y fuerte.
                    </p>
                </div>

                <img src={friendsImage} alt="Guardianes del planeta"
                     className="w-full h-64 object-cover rounded-lg shadow-lg"/>
            </section>

            <section className="flex sm:flex-col h-screen w-full bg-primary-600 text-white">
                <div className="flex items-center justify-center p-8">
                    <img src={foundingImage} alt="EcoFound"
                         className="ml-8"/>
                </div>
                <div className="flex flex-col items-center justify-center text-center p-8">
                    <h1 className="text-4xl font-bold mb-6">EcoFound</h1>
                    <p className="text-lg">
                        EcoFound es nuestra plataforma de crowdfunding, diseñada para apoyar proyectos de energía
                        renovable. A través de donaciones y financiamiento colectivo, podemos impulsar iniciativas que
                        ayudarán a crear un futuro más verde y sostenible.
                    </p>
                </div>
            </section>

            <section className="flex sm:flex-col lg:flex-row h-screen w-full bg-gray-100 text-primary-800">
                <div className="flex flex-col items-center justify-center text-center p-8">
                    <h1 className="text-4xl font-bold mb-6">EcoEduca</h1>
                    <p className="text-lg">
                        Una plataforma educativa enfocada en niños y jóvenes, donde pueden aprender sobre el cambio
                        climático a través de cursos interactivos y proyectos prácticos. ¡Es el lugar perfecto para
                        aquellos que desean ser parte de la próxima generación de defensores del planeta!
                    </p>
                </div>
                <div className="flex items-center justify-center p-8">
                    <img src={projectImage} alt="EcoEduca"
                    />
                </div>
            </section>

            <section className="flex flex-col h-screen w-full bg-primary-500">
                <div className="flex-1 flex flex-col items-center justify-center text-center text-white p-8">
                    <h1 className="text-5xl font-bold mb-6">Únete a la Revolución Verde</h1>
                    <p className="text-lg mb-6">
                        Con EnerGreen, puedes aprender, jugar y contribuir a un futuro más sostenible. ¡Únete a nuestra
                        plataforma y sé parte del cambio!
                    </p>
                    <button
                        onClick={handleStart}
                        className="mt-6 px-8 py-3 bg-primary-700 text-white rounded-md hover:bg-secondary-600"
                    >
                        Comenzar
                    </button>
                </div>
            </section>


            <Footer></Footer>
        </div>
    </>;
    return div;
}

export default Home;
