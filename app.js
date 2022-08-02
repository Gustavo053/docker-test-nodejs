const express = require("express");
const app = express();
app.get("/", function (req, res) {
	res.send("Hello! This server are running in a container docker!");
});
app.listen(3000, function () {
	console.log("Server running in port 3000!");
});
