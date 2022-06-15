const fetchName = (name) => fetch("https://api.agify.io?name=" + name);
const input = document.getElementById("name");
const btn = document.querySelector("#button");

fetchName("louis")
	.then((res) => res.json())
	.then((data) => {
		btn.addEventListener("click", () => {
			console.log(input);
			const body = document.querySelector("body");
			const div = document.createElement("div");
			body.append(div);
			div.textContent = data;
		});
	})
	.catch((error) => {
		console.log("There was an error", error);
	});
