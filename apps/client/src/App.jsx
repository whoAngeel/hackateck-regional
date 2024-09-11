import AppRouter from "./routes/AppRouter";
import { ConfigProvider, message } from "antd";
import { Provider } from "react-redux";
// import {store, persistor} from
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ConfigProvider
					theme={{
						token: {
							// Colores principales
							colorPrimary: "#6BAF58", // Verde medio para elementos primarios
							colorText: "#FFFFFF", // Texto principal en blanco
							colorBgContainer: "#A4D37E", // Verde claro para fondos
							colorInfo: "#B9D04D", // Amarillo verdoso para detalles informativos
							colorBgLayout: "#E1E8D3", // Gris claro para fondos neutros
							// Fondo
						},
					}}
				>
					<AppRouter />
				</ConfigProvider>
			</PersistGate>
		</Provider>
	);
}
export default App;
