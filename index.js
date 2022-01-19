require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// require("./routes")(app);

const port = process.env.PORT || 3030;

app.get("/api/members", (request, res) => {
  connection.query("SELECT * FROM members", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    } else {
      res.json(result);
    }
  });
});

app.post("/api/members", (req, res) => {
  const { name } = req.body;
  connection.query(
    "INSERT INTO members (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving the member");
      } else {
        res.status(200).send("Member successfully saved");
      }
    }
  );
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
