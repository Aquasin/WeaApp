const Toast = (msg) => {
	var toast = document.getElementById("hidden");
	toast.className = "show";
	toast.innerText = msg;
	if (msg === "Wrong City Name Entered") {
		toast.style.backgroundColor = "#bd2130";
	}
	if (msg === "Data Found") {
		toast.style.backgroundColor = "#28a745";
	}
	if (msg === "Welcome to the Weather App") {
		toast.style.backgroundColor = "#007bff";
	}
	setTimeout(() => {
		toast.className = toast.className.replace("show", "");
		toast.innerHTML = "";
	}, 3000);
};

export default Toast;
