const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const { Pool } = require("pg");


app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public")));

const port = parseInt(process.env.PORT || "3000");
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
const pool = new Pool({
	user: "mvaqslndedwcck",
	host: "ec2-54-155-110-181.eu-west-1.compute.amazonaws.com",
	database: "dc31lff48akss8",
	password: "0f55dd3f03f02c8e91ce39672fccd875c4c66a7e8b2cd0710aca06499162c4f9",
	port: 5432,
	ssl: {
		rejectUnauthorized: false,
	},
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

	if (!name || !email || !message) {
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

app.post("/api/email", function (req, res) {
	const email = req.body.email;

	if (!email) {
		return res.status(400).send("Please provide all information required.");
	}

	const query =
		"INSERT INTO mailing_list (email) VALUES ($1)";

	pool
		.query(query, [email])
		.then(() => res.send("Email address added!"))
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});


app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
