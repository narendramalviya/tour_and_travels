import { API } from "../../../backend";

export const signup = (user) => {
	console.log(API);

	fetch(`${API}/user/signup`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			console.log(response);

			return response.json();
		})
		.catch((error) => {
			console.log(error);
			return error.json();
		});
};
