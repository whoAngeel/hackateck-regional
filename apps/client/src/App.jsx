import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ConfigProvider } from "antd";

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					// Colores principales
					colorPrimary: "#00b96b", // Verde primario para botones y elementos destacados
					borderRadius: 4, // Radio de borde para una apariencia suave

					// Colores secundarios
					colorSecondary: "#87e8de", // Azul claro para complementos
					colorInfo: "#005f3c", // Verde oscuro para información adicional

					// Fondo
					colorBgContainer: "#e8f5e9", // Marrón claro para fondos de contenedores
					colorBgLayout: "#f0f4f0", // Gris suave para el fondo general
					colorText: "#4e342e", // Marrón oscuro para el texto
				},
			}}
		>
			<AppRouter />
		</ConfigProvider>
	);
}
export default App;
