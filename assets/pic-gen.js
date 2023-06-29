const imageArray = [
	"https://ettkon.github.io/Pictures/3EBC40F4-C2B1-4F66-9727-2B2385822279.jpeg",
	"https://ettkon.github.io/Pictures/6834B942-62FC-47D1-BF9A-85342E8635DA.jpeg",
	"https://ettkon.github.io/Pictures/70273824-73E8-4053-8016-3BD1A6950865.jpeg",
	"https://ettkon.github.io/Pictures/A1643A56-B7A7-4747-AD3E-D7B7A287E73D.jpeg",
	"https://ettkon.github.io/Pictures/AA831393-05A7-408D-B252-9E4E4DB28A02.jpeg",
	"https://ettkon.github.io/Pictures/D703A266-5F69-454A-A360-38BCE21297EC.jpeg",
	"https://ettkon.github.io/Pictures/E10D0D27-46E7-431C-A5E8-74644E0FE7FC.jpeg",
	"https://ettkon.github.io/Pictures/E26962EB-764D-4409-A4EB-62B361B914A9.jpeg",
	"https://ettkon.github.io/Pictures/E5C61999-1D03-490A-9CF6-89E136038434.jpeg",
	"https://ettkon.github.io/Pictures/E917163F-A328-4115-9D52-0B35FF34B6A3.jpeg"
];


const image = document.getElementById("img")
const button = document.getElementById("butt")

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
};
