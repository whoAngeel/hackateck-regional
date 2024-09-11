import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
	return <AppRouter />;
}

export default App;
