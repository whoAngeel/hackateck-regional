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
							// Colores principales (Primary y Secondary)
							colorPrimary: "#1A897A", // Verde oscuro (Primary)
							colorSuccess: "#00D0B1", // Verde éxito
							colorWarning: "#FFC80F", // Amarillo de advertencia
							colorError: "#D83A43", // Rojo de error
							colorInfo: "#E9F7F7", // Azul claro para información

							// Colores secundarios y acento
							colorSecondary: "#A5F0DF", // Verde claro (Secondary)
							colorAccent: "#FF5D63", // Rojo para acentos y alertas

							// Colores de fondo
							colorBgBase: "#D6F3F2", // Azul claro base
							colorBgContainer: "#F2F9F8", // Fondo de contenedor más claro
							colorBgLayout: "#E6F3F2", // Fondo general de la aplicación

							// Colores de texto
							colorTextBase: "#042F2E", // Texto principal (Verde oscuro)
							colorTextSecondary: "#8DACA5", // Texto secundario (Gris claro)
							colorTextPlaceholder: "#99A8A8", // Texto de placeholder (Gris neutro)

							// Bordes y otros elementos neutrales
							colorBorderBase: "#B3C2C2", // Color de bordes (Gris neutro)
							colorBorderSecondary: "#CCDCDC", // Bordes secundarios más claros

							// Hover y foco
							colorPrimaryHover: "#157062", // Verde oscuro hover para primary
							colorPrimaryActive: "#11564B", // Verde más oscuro para estados activos
							colorBgHover: "#B9DFDC", // Hover en los contenedores
							colorBgActive: "#90CCC7", // Color activo de fondo

							// Colores de otros elementos
							colorLink: "#1A897A", // Enlaces con el color primario
							colorLinkHover: "#157062", // Hover en los enlaces
							colorLinkActive: "#11564B", // Enlaces activos
							colorDisabled: "#B3C2C2", // Color de elementos deshabilitados (Gris)
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
