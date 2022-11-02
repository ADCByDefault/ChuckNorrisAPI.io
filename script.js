let jokeP = document.querySelector("#jokeP");
let newJoke = document.querySelector("#new");

let loadnew = true;

window.onload = () => {
	newJoke.click();
};

newJoke.addEventListener("click", () => {
	if (!loadnew) {
		return;
	}
	loadnew = false;
	fetchJoke();
	loadnew = true;
});

async function fetchJoke() {
	let rep = await fetch("https://api.chucknorris.io/jokes/random");
	let fjson = await rep.json();
	jokeP.innerText = fjson.value;
}
