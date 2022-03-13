/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "de",
	locale: "de-CH",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			// position: 'bottom_left',
			// you can hide this module afterwards from the remote control itself
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				showModuleApiMenu: true, // Optional, Enable the Module Controls menu
				secureEndpoints: true, // Optional, See API/README.md
				// uncomment any of the lines below if you're gonna use it
				// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				// apiKey: "", // Optional, See API/README.md for details
				// classes: {} // Optional, See "Custom Classes" below
			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			displayType: "analog",
			lat: 47.3,
      		lon: 7.9,
			showSunTimes: true
		},
		{
			module: "compliments",
			position: "lower_third",	// This can be any of the regions.
									// Best results in one of the middle regions like: lower_third
			config: {
				compliments: {
					morning: [
						"Dir einen ruhigen Tag."
					],
					evening: [
						"Willkommen zur Übung",
            "Hast Du genug getrunken?",
            "Ist Deine PSA vollständig?",
            "Langsam pressieren!",
            "Langsam ist geschmeidig -- geschmeidig ist schnell."
					],
				}
			}
		},
		{
			module: "calendar",
			header: "Nächste Übungen",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://cs.kroesch.net/images/feed.ics"
					}
				]
			}
		},
		{
				module: 'MMM-EasyBack',
				position: 'fullscreen_below',
				config: {
						bgName: "atemschutz.jpg",
						videoName: "",       // "baboon.mp4",         // file name of your local video
						youTubeID: "", //"SkeNMoDlHUU", // "So3vH9FY2H4", // ID from any YouTube video. ID comes after the = sign of YouTube url
						height: "1080px",    // your display's resolution in pixels. Enter in config.js
						width: "1920px",     // your display's resolution in pixels. Enter in config.js
				}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Dulliken",
				locationID: "7285679",
				apiKey: "4548d1b1b536a922a3ca8d5e5660ae61"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Dulliken",
				locationID: "7285679",
				apiKey: "4548d1b1b536a922a3ca8d5e5660ae61"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Schweiz",
						url: "https://www.srf.ch/news/bnf/rss/1890"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
