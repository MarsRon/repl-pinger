const sites = require("./sites.json");
const fetch = require("node-fetch");
const server = require("express")();
server.all("/", (req, res) => {
	sites.forEach(site => 
		fetch(site)
			.then(res => console.log(`${site}: ${res.status}`))
			.catch(e => console.log(e.message))
	);
	res.redirect(307, "https://marsron.github.io");
});
server.listen(3000);