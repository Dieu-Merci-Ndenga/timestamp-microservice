const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../server');

test('returns the requested natural date in unix milliseconds and utc format', async () => {
  const response = await request(app).get('/api/December%2015,%202015');

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, {
    unix: 1450137600000,
    utc: 'Tue, 15 Dec 2015 00:00:00 GMT',
  });
});

test('returns the requested Unix timestamp in milliseconds', async () => {
  const response = await request(app).get('/api/1451001600000');

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, {
    unix: 1451001600000,
    utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
  });
});

test('returns the current time when the date parameter is empty', async () => {
  const response = await request(app).get('/api');

  assert.equal(response.status, 200);
  assert.ok(typeof response.body.unix === 'number');
  assert.ok(typeof response.body.utc === 'string');
});

test('returns an invalid-date error for an unparseable date string', async () => {
  const response = await request(app).get('/api/not-a-date');

  assert.equal(response.status, 400);
  assert.deepEqual(response.body, { error: 'Invalid Date' });
});
