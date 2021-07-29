import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('tests post', async () => {
    const res = await request(app)
      .post('/api/v1/num')
      .send(43456);

    expect(res.body).toEqual(43);

  });
});
