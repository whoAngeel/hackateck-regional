import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import FundReducer from "./funding/fund.slice";
import AuthReducer from "./auth/auth.slice";
const authPersistConfig = {
	key: "root",
	storage,
};
const persistedAuthReducer = persistReducer(authPersistConfig, AuthReducer);

const rootReducer = combineReducers({
	auth: persistedAuthReducer,
	funding: FundReducer,
	// otros reducers
});
export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
