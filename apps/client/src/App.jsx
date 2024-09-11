import AppRouter from "./routes/AppRouter";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
// import {store, persistor} from
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
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
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppRouter />
				</PersistGate>
			</Provider>
		</ConfigProvider>
	);
}
export default App;
