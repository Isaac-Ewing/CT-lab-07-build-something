import request from 'superagent';
import { conv } from '../utils/math.js';
import Convert from '../models/Convert.js';

class Base {
  static async create(value) {
    const base = await request.get('http://www.randomnumberapi.com/api/v1.0/random?min=2&max=16&count=1');
    const converted = conv(value, 11);
    const newValue = await Convert.insert(converted);
    return newValue;
  }
}

export default Base;
