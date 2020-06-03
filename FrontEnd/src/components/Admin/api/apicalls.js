import { API } from "../../../backend";

export const allTourPackages = () => {
	return fetch(`${API}/tourPackages/allTourPackages`)
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const updateTourPackage = (pkgData, token, userId) => {
	console.log(pkgData);

	return fetch(`${API}/tourPackages/${pkgData._id}/${userId}`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(pkgData),
	}).then((response) => response.json());
};

export const deleteTourPackage = (pkgId, token, userId) => {
	return fetch(`${API}/tourPackages/${pkgId}/${userId}`, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	}).then((response) => response.json());
};
