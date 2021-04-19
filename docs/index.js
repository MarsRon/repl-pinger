function createRipple(event) {
	const button = event.currentTarget;

	const circle = document.createElement("span");
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
	circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
	circle.classList.add("ripple");

	const ripple = button.getElementsByClassName("ripple")[0];

	if (ripple) ripple.remove();

	button.appendChild(circle);
}

document.addEventListener("DOMContentLoaded", function() {
	for (const button of document.getElementsByTagName("a"))
		button.onclick = createRipple;

	// Rotate background gradient
	const background = document.getElementById("title");
	let deg = 62;
	setInterval(function() {
		deg += 4;
		if (deg >= 360)
			deg = 0;
		background.style.backgroundImage = `linear-gradient(${deg}deg, #3a3d40 0, #181719 100%)`;
	}, 100);
});