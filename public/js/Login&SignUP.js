const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
	container.classList.add("sign-up-mode");
	var modal = document.getElementById("myModal");
	modal.style.visibility = 'visible';
	modal.style.opacity="1"
});
sign_in_btn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});
function myFunction() {
  var x = document.getElementById("password_up");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myFunction2() {
  var x = document.getElementById("login_password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}





document.getElementById("form").addEventListener('submit', function (e) {
	e.preventDefault();
	var UserName = document.getElementById('name');
	var Email = document.getElementById('email');
	var Pnumber = document.getElementById('phonenumber');
	var password = document.getElementById('password');
	var year = document.getElementById("standard-select");
	
});



///////////////////////// End Of Sign Up




function forget() {
	document.getElementById("login").style.display = "none";
	document.getElementById("forg").style.display = "flex";
}


