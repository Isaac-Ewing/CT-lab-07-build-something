const pool = require('../utils/pool');

module.exports = class Convert {
    id;
    value;

    constructor(row) {
      this.id = row.id;
      this.value = row.value;
    }

    static async insert(value) {
      const { rows } = await pool.query(
        'INSERT INTO num (value) VALUES ($1) RETURNING *',
        [value]
      );
      return new Convert(rows[0]);
    }
};
