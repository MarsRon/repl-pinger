const sites = require("./sites.json");
const fetch = require("node-fetch");
const server = require("express")();
const { WEBHOOK, USER } = process.env;
server.all("/", (req, res) => {
	sites.forEach(site => 
		fetch(site)
			.then(res => {
				if (!res.ok)
					fetch(WEBHOOK, {
						method: "post",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							content: `<@${USER}>`,
							embeds: [{
								title: "SITE IS DOWN",
								description: `\`${new URL(site).hostname}\` is down: ${res.status}`,
								color: 16013612
							}]
						}),
					});
				console.log(`${site}: ${res.status}`);
			})
			.catch(e => console.log(e.message))
	);
	res.redirect(307, "https://marsron.github.io");
});
server.listen(3000);