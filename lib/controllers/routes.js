const { Router } = require('express');
// const Convert = require('../models/Convert.js');
const Base = require('../services/services.js');

module.exports = Router()
  .post('/'), async (req, res, next) => {
  try {
    const base = await Base.create(req.body);

    res.send(base);
  }
  catch(err) {
    next(err);
  }
};
