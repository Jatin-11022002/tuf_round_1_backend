const db = require('../config/dbConfig');

const Banner = {
  getBanner: (callback) => {
    const query = "SELECT * FROM banner LIMIT 1";
    db.query(query, (err, result) => {
      if (err) return callback(err);
      return callback(null, result[0]);
    });
  },

  updateBanner: (data, callback) => {
    const query = "UPDATE banner SET ? WHERE id = 1";
    db.query(query, data, (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  }
};

module.exports = Banner;
