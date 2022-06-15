const btn = document.querySelector("button");

fetch("becode.json")
	.then((response) => response.json())
	.then((data) => {
		btn.addEventListener("click", () => {
			const body = document.querySelector("body");
			const ul = document.createElement("ul");
			body.appendChild(ul);
			for (let rules of data) {
				let li = document.createElement("li");
				ul.appendChild(li);
				li.textContent = rules;
			}
		});
	});
