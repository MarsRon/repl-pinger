// Modules
import axios from "axios";
import { createServer } from "http";
import { URL } from "url";

// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Constants
const { SITES, DISCORD_WEBHOOK, OWNERID } = process.env,
	sites = (SITES as string).split(/\s+/),
	print = console.log;

// Create webserver
createServer(async (_req, svrRes) => {
	// Respond with "okay"
	svrRes.writeHead(200);
	svrRes.end("okay");

	// Loop through sites
	for (const site of sites) {
		try {
			// Try pinging the site
			const res = await axios.head(site, { timeout: 30000 });
			print(`${new Date().toISOString()} ${new URL(site).hostname}: ${res.statusText}`);
		} catch(err) {
			// Log to console & Send Discord webhook
			print(`Website Down: ${new URL(site).hostname} - ${err.message}`);
			const embeds = [{
				title: "SITE IS DOWN",
				description: `${site} is down\nTimestamp: ${new Date().toISOString()}\nStatus: \`${err}\``,
				color: 16013612
			}];
			axios.post(
				DISCORD_WEBHOOK as string,
				OWNERID !== undefined ? { content: `<@${OWNERID as string}>`, embeds } : { embeds }
			).catch(e => // Catch webhook error
				print("Webhook Error: " + e.message)
			);
		}
	}
}).listen(3000, () => // Listen on port 3000
	print("Repl Pinger is now running!")
);
