import React from "react";
import BentoCards from "../../components/funding/BentoCards";

function Index() {
	return (
		<>
			<section className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
				<div className="text-center text-white ">
					<h1 className="text-5xl font-bold mb-4">Bienvenido a EcoFund</h1>
					<p className="text-xl mb-6">Inicia una recaudacion</p>
					<a
						href="#features"
						className="bg-white text-green-500 py-2 px-4 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition duration-300"
					>
						Comienza ahora
					</a>
				</div>
			</section>
			<section className="relative -mt-28 py-12 bg-base-50 rounded-t-[80px] w-full ">
				<BentoCards />
			</section>
		</>
	);
}

export default Index;
