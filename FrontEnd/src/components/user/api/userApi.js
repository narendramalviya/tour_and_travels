import { API } from "../../../backend";

export const signup = (user) => {
	return fetch(`${API}/user/signup`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	}).then((response) => {
		const resp = response.json();
		return resp;
	});
};

export const signin = (user) => {
	return fetch(`${API}/user/signin`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},

		body: JSON.stringify(user),
	}).then((response) => {
		console.log(response.headers.get("Set-Cookie"));

		const resp = response.json();
		return resp;
	});
};

export const authenticate = (data, next) => {
	if (window.localStorage !== undefined)
		window.localStorage.setItem("jwt", JSON.stringify(data));
	next();
};

export const isAuthenticate = () => {
	if (window === undefined) return false;

	if (localStorage.getItem("jwt"))
		return JSON.parse(localStorage.getItem("jwt"));
	else return false;
};

export const signout = (next) => {
	if (window !== undefined) {
		localStorage.removeItem("jwt");
		next();

		return fetch(`${API}/signout`, {
			method: "GET",
		})
			.then((response) => console.log("signout success"))
			.catch((err) => console.log(err));
	}
};

export const isAdmin =() =>{
		if(window === undefined)
		  return false;
		if(localStorage.getItem("jwt")){
			const user = localStorage.getItem("jwt");
            return user.role === 1;
		}
}