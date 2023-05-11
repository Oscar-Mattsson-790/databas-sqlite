const db = require("./db");

function updateRow() {
  const [id, play] = process.argv.slice(2);
  db.run(`UPDATE insults SET play = ? WHERE id = ?`, [play, id], (error) => {
    if (error) {
      console.log(error.message);
    }
    console.log(`Row ${id} has been updated`);
  });
}

updateRow();
