let loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", (e) => {
	e.preventDefault();
	const pswd = loginForm.value;

	if(pswd === "pickle") {
		window.location.href = "//EttKon.github.io/picture_generator.html";
	}
	else {
		alert("wrong password");
	}
});

// loginButton.addEventListener("click", function(){
// 	// document.location.href = "google.com";
// 	alert("test")
// })
