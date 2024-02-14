import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../Slice/LoginSlice";
import SignupSlice from "../Slice/SignupSlice";

export const store=configureStore({

    reducer:{
        login:LoginSlice,
        sign:SignupSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;










// store.js
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// import LoginSlice from '../Slice/LoginSlice';
// import SignupSlice from '../Slice/SignupSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   login: LoginSlice,
//   sign: SignupSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);


