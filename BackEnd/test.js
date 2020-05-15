const axios = require("axios");
const API = "http://localhost:7000/api";

const name = "test10",
	lastname = "test10last",
	email = "test10@mail.com",
	password = "1234";

const user = JSON.stringify({ name, lastname, email, password });
const axiosReq = () => {
    axios
    .post(`${API}/user/signup`, user)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => console.log(error));
};

const jsFetch = () => {
    fetch(`${API}/user/signup`, {
        method: "POST",
		headers: {
            Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: user,
	})
    .then((response) => {
			console.log(response);
		})
		.catch((error) => {
            console.log(error);
		});
    };

    axiosReq();