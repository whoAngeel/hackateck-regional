import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialFunds = [
	{
		id: 1,
		name: "Proyecto Solar",
		description: "Instalación de paneles solares",
		fundingGoal: 10000,
		collected: 5000,
		image: "https://placehold.co/600x400",
		category: "Electricidad",
	},
	{
		id: 2,
		name: "Energía Eólica",
		description: "Desarrollo de turbinas eólicas",
		fundingGoal: 20000,
		collected: 15000,
		image: "https://placehold.co/800x400",
		category: "Electricidad",
	},
	{
		id: 3,
		name: "Cambio Climatico",
		description: "Cambio Climatico",
		fundingGoal: 30000,
		collected: 25000,
		image: "https://placehold.co/800x400",
		category: "Cambio Climatico",
	},
	{
		id: 4,
		name: "Paneles solares para la primaria de la colonia",
		description: "Paneles solares",
		fundingGoal: 30000,
		collected: 25000,
		image: "https://placehold.co/800x400",
		category: "Electricidad",
	},
	{
		id: 5,
		name: "Pozo de agua",
		description: "Paneles solares",
		fundingGoal: 30000,
		collected: 25000,
		image: "https://placehold.co/900x300",
		category: "Cambio climatico",
	},
];

const initialState = {
	isLoading: false,
	error: null,
	funds: initialFunds,
	fund: null,
};

export const fundSlice = createSlice({
	name: "funds",
	initialState,
	reducers: {
		createFund: (state, action) => {
			const newFund = {
				id: initialFunds.length + 1,
				image: "https://placehold.co/600x400",
				collected: 0,
				...action.payload,
			}; // Genera un ID único
			state.funds = [newFund, ...state.funds]; // Agrega al inicio
			state.isLoading = false;
			state.error = null;
		},
		// Leer todos los fondos
		fetchFunds: (state) => {
			state.isLoading = false;
			state.error = null;
		},
		updateCollectedAmount: (state, action) => {
			const { id, amount } = action.payload;
			const fund = state.funds.find((fund) => fund.id === id);
			if (fund) {
				fund.collected += amount; // Sumar la cantidad recaudada
			}
		},
		// Actualizar fondo
		updateFund: (state, action) => {
			const { id, updatedData } = action.payload;
			const fundIndex = state.funds.findIndex((fund) => fund.id === id);
			if (fundIndex !== -1) {
				state.funds[fundIndex] = {
					...state.funds[fundIndex],
					...updatedData,
				};
				state.isLoading = false;
				state.error = null;
			}
		},
		// Eliminar fondo
		deleteFund: (state, action) => {
			const fundId = action.payload;
			state.funds = state.funds.filter((fund) => fund.id !== fundId);
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const {
	updateCollectedAmount,
	fetchFunds,
	deleteFund,
	updateFund,
	createFund,
} = fundSlice.actions;
export default fundSlice.reducer;
