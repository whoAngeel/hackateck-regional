import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import Cookie from "js-cookie";
import axios from "axios";
const initialState = {
	token: null,
	user: null,
	isLoading: false,
	error: null,
};

export const loginAuth = createAsyncThunk(
	"auth/login",
	async (loginData, { rejectWithValue }) => {
		try {
			const response = await axios.post("/api/auth/login", loginData);
			console.log("SLICE LOGIN", response.data);
			Cookie.set("token", response.data.token);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const registerAuth = createAsyncThunk(
	"auth/register",
	async (registerData, { rejectWithValue }) => {
		try {
			const response = await axios.post("/api/auth/register", registerData);

			console.log("SLICE REGISTER", response.data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			Cookie.remove("token");
			state.token = null;
			state.user = null;
			state.isLoading = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginAuth.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(loginAuth.fulfilled, (state, action) => {
				state.isLoading = false;
				state.token = action.payload.token;
				state.user = action.payload.user;
				state.error = null;
			})
			.addCase(loginAuth.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
				message.error("Credenciales incorrectas");
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
