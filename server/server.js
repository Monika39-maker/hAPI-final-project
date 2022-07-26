const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const contactMessage = [{}];

const port = parseInt(process.env.PORT || "3000");

app.get("/", function (req, res) {
	res.json(contactMessage);
});

app.post("/api/new-contact", function (req, res) {
	const { name, email, message } = req.body;

	contactMessage.push({
		name,
		email,
		message,
	});
	res.status(200).json(contactMessage);
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
