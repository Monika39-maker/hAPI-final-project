const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public")));

const contactMessage = {
	id: 0,
	name: "Bart Simpson",
	email: "bart@springfield.com",
	message: "Eat my shorts!",
};

const emails = [
	{
		email: "name@email.com",
	},
];

const port = parseInt(process.env.PORT || "3000");

app.get("/", function (req, res) {
	res.json("Hello World");
});

app.post("/api/new-contact", function (req, res) {
	res.json(contactMessage);
});

app.get("/api/email", function (req, res) {
	pool
		.query("SELECT * FROM mailing_list")
		.then((result) => res.json(result.rows))
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});
// app.get("/api/email", (req, res) => {
// 	res.send(emails);
// });

app.post("/api/email", function (req, res) {
	const email = req.body.email;

	if ((!email)) {
		return res.status(400).send("Please provide valid email.");
	}

	const query =
		"INSERT INTO mailing_list (email) VALUES ($1)";

	pool
		.query(query, [email])
		.then(() => res.send("email address added to mailing list!"))
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});


// app.post("/api/email", (req, res) => {
// 	let emailsList = req.body;
// 	let newEmail = req.body.email;
// 	emails.push({
// 		"email": newEmail,
// 	});
// 	res.send(emailsList).status(200);
// });

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
