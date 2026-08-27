const http = require("node:http")
const dotenv = require("dotenv")
dotenv.config();

var currentUser

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// handle incoming requests
const server = http.createServer((request, response) => {
	const url = request.url
	const met = request.method

	// this code is tailored to my needs, however if you would rather just have a 1 to 1 redirect
	// where only the domain changes, use the last case in the switch statement and remove the
	// first two cases. 

	switch (url) { 
		case "/":
			response.writeHead(302, {
				"Location": process.env.DOMAIN+"/hdg"
			})
			response.end()

			break
		case "/developers":
			response.writeHead(302, {
				"Location": process.env.DOMAIN+"/hdg/developers"
			})
			response.end()

			break
		default:
			response.writeHead(302, {
				"Location": process.env.DOMAIN+url
			})
			response.end()

			break
	}
})

// make the server
server.listen(process.env.PORT, "127.0.0.1", () => {
	console.log("Listening on 127.0.0.1:"+process.env.PORT)
});