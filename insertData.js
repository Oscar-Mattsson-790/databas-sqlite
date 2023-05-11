const db = require("./db");

function insert() {
  const [insult, play] = process.argv.slice(2);

  db.run(
    `INSERT INTO insults (insult, play) VALUES (?, ?)`,
    [insult, play],
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Inserted a row with the ID: ${this.lastID}`);
    }
  );
}

insert();
