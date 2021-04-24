function createRipple({ currentTarget: button, clientX, clientY }) {
	const ripple = document.createElement("span"),
		{ style } = ripple,
		diameter = Math.max(button.clientWidth, button.clientHeight),
		radius = diameter / 2;

	style.width = style.height = `${diameter}px`;
	style.left = `${clientX - button.offsetLeft - radius}px`;
	style.top = `${clientY - button.offsetTop - radius}px`;
	ripple.classList.add("ripple");

	setTimeout(() => ripple.remove(), 600);

	button.appendChild(ripple);
}

document.addEventListener("DOMContentLoaded", () => {
	for (const button of document.getElementsByTagName("a"))
		button.onmousedown = createRipple;

	// Rotate background gradient
	const { style } = document.getElementById("about"),
		{ requestAnimationFrame: animate } = window;
	let deg = 62;
	const rotate = () => {
		deg += 0.5;
		if (deg >= 360)
			deg = 0;
		style.backgroundImage = `linear-gradient(${deg}deg, #3a3d40 0, #181719 100%)`;
		animate(rotate);
	};
	animate(rotate);
});
