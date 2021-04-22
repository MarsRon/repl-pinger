function createRipple({ currentTarget: button, clientX, clientY }) {
	const ripple = document.createElement("span"),
		{ style } = ripple,
		diameter = Math.max(button.clientWidth, button.clientHeight),
		radius = diameter / 2;

	style.width = style.height = `${diameter}px`;
	style.left = `${clientX - button.offsetLeft - radius}px`;
	style.top = `${clientY - button.offsetTop - radius}px`;
	ripple.classList.add("ripple");

	setTimeout(() => ripple.remove(), 1000);

	button.appendChild(ripple);
}

document.addEventListener("DOMContentLoaded", () => {
	for (const button of document.getElementsByTagName("a"))
		button.onclick = createRipple;

	// Rotate background gradient
	const { style } = document.getElementById("title");
	let deg = 62;
	setInterval(() => {
		deg += 4;
		if (deg >= 360)
			deg = 0;
		style.backgroundImage = `linear-gradient(${deg}deg, #3a3d40 0, #181719 100%)`;
	}, 100);
});
