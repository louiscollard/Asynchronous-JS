const fetchName = (name) => fetch("https://api.agify.io?name=" + name);

fetchName("michael")
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((error) => {
		console.log("There was an error", error);
	});
