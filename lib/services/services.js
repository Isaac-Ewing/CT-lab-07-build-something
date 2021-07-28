const { request } = require('express');
const { conv } = require('../utils/math.js');
const Convert = require('../models/Convert.js');

module.exports = class Base {
  static async create(value) {
    const base = await request.get('http://www.randomnumberapi.com/api/v1.0/random?min=2&max=16&count=1');
    const converted = conv(value, base);
    const newValue = await Convert.insert(converted);
    return newValue;
  }
};
