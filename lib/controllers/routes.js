import { Router } from 'express';
// const Convert = require('../models/Convert.js');
import Base from '../services/Base.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const base = await Base.create(req.body.number);

      res.send(base);
    }
    catch(err) {
      next(err);
    }
  });
