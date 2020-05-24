import { API } from "../../../backend";

export const allTourPackages = () => {
	return fetch(`${API}/tourPackages/allTourPackages`)
		.then((response) => console.log(response.json()))
		.catch((err) => console.log(err));
};



