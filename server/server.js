const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());


const emails = [
	{
		email: "name@email.com",
	},
];
//const contactMessages = require("./contactMessages.json");

const port = parseInt(process.env.PORT || "3000");

//Commented out is the code for pushing contact messages to a json file. Now superceded by code pushing contact messages to postgres database
// app.get("/", function (req, res) {
// 	res.send(contactMessages);
// });

// app.post("/api/new-contact", function (req, res) {
// 	const { name, email, message } = req.body;

// 	contactMessages.push({
// 		name,
// 		email,
// 		message,
// 	});
// 	res.status(200).json(contactMessages);
// });

const pool = new Pool({
	user: "harsheek",
	host: "localhost",
	database: "postgres",
	password: "",
	port: 5433,
});

app.get("/api/new-contact", function (req, res) {
	pool
		.query("SELECT * FROM contact_messages")
		.then((result) => res.json(result.rows))
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});

app.post("/api/new-contact", function (req, res) {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

	if ((!name) || (!email) || (!message)) {
		return res.status(400).send("Please provide all information required.");
	}

	const query =
		"INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)";

	pool
		.query(query, [name, email, message])
		.then(() => res.send("Contact message added!"))
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
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
