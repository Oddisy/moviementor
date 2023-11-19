import {createSlice} from "@reduxjs/toolkit";
//  initial state for the authentication slice
const initialState = {
	token: "",
	email: "",
	userName: "",
};

const authSlice = createSlice({
	name: "auth", // Name of the slice, used in the Redux store, can be any name but descriptive
	initialState,
	reducers: {
		// Reducer to set the user's authentication token to the local browser
		setUserValues: (state, action) => {
			state.token = action.payload.token;
			localStorage.setItem("token", state.token);
		},
		clearToken: (state) => {
			state.token = ""; // Clears the token by setting it to an empty string
			localStorage.setItem("token", state.token);
		},
		// Reducer to set the user's email in the local browser
		setLoginEmailValues: (state, action) => {
			state.email = action.payload.email;
			localStorage.setItem("email", state.email);
		},
		// Reducer to set the user's username
		setLoginUserNameValues: (state, action) => {
			state.userName = action.payload.username;
			localStorage.setItem("username", state.userName);
		},
	},
});
// Export the action creators from the auth slice
export const {
	setUserValues,
	setLoginEmailValues,
	setLoginUserNameValues,
	clearToken,
} = authSlice.actions;
// Export the reducer from the auth slice
export default authSlice.reducer;
