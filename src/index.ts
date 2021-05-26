// Modules
import axios from "axios";
import { createServer } from "http";
import { URL } from "url";

// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Constants
const { SITES, DISCORD_WEBHOOK, OWNER_ID } = process.env;

// Array of sites
const sites = SITES!.split(/\s+/);

// Create webserver
createServer((_req, svrRes) => {

	// Respond with "okay"
	svrRes.writeHead(200);
	svrRes.end("okay");

	// Loop through sites
	sites.forEach(async site => {
		try {
			// Try pinging the site
			const res = await axios.head(site, { timeout: 30000 });
			console.log(`${new Date().toISOString()} ${new URL(site).hostname}: ${res.statusText}`);
		} catch({ message: error }) {

			// Log to console
			console.log(`Website Down: ${site} - ${error}`);

			// Check for status code
			// Return of status is OK
			const status = Number((error as string).match(/\d{3}$/));
			if (status < 400) return;

			// Send Discord webhook
			const embeds = [{
				title: "SITE IS DOWN",
				description: `${site} is down\nTimestamp: \`${new Date().toISOString()}\`\nStatus: \`${error}\``,
				color: 0xF4592C
			}];
			axios.post(
				DISCORD_WEBHOOK!,
				OWNER_ID !== undefined ? { content: `<@${OWNER_ID}>`, embeds } : { embeds }
			).catch(e => // Catch webhook error
				console.log("Webhook Error: " + e.message)
			);
		}
	});

})
// Listen on port 3000
.listen(3000, () => 
	console.log("Repl Pinger is now running on port 3000!")
);
