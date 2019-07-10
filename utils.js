const fs = require('fs');

const getNotes = function() {
    fs.readFile('notes.txt', (err, data) => {
        if (err) throw err;
        return data.toString();
      });
}

module.exports = getNotes;