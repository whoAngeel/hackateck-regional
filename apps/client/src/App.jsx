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
							colorPrimary: "#00b96b",
							borderRadius: 4,

							// Colores secundarios
							colorSecondary: "#87e8de",
							colorInfo: "#005f3c",

							// Fondo
							colorBgContainer: "#e8f5e9",
							colorBgLayout: "#f0f4f0",
							colorText: "#4e342e",
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
