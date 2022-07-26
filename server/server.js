const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const contactMessage = {
	id: 0,
	name: "Bart Simpson",
	email: "bart@springfield.com",
	message: "Eat my shorts!",
};

const emails = require("./emails.json");

const port = parseInt(process.env.PORT || "3000");

app.get("/", function (req, res) {
	res.json("Hello World");
});

app.post("/api/new-contact", function (req, res) {
	res.json(contactMessage);
});

app.get("/api/email", (req, res) => {
	res.send(emails);
});

app.post("/api/email", (req, res) => {
	let emailsList = req.body;
	let newEmail = req.body.email;
	emails.push({
		"email": newEmail
	});
	res.send(emailsList).status(200);
})

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
