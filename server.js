const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

function currentTimestamp() {
  const now = new Date();
  return { unix: now.getTime(), utc: now.toUTCString() };
}

function normalizeInput(value) {
  if (value === undefined || value === null || value === '') {
    return currentTimestamp();
  }

  const trimmed = String(value).trim();

  if (trimmed === '') {
    return currentTimestamp();
  }

  if (/^\d+$/.test(trimmed)) {
    const numericValue = Number(trimmed);
    const date = trimmed.length >= 13
      ? new Date(numericValue)
      : new Date(numericValue * 1000);

    if (!Number.isNaN(date.getTime())) {
      return { unix: date.getTime(), utc: date.toUTCString() };
    }
  }

  const parsedDate = new Date(trimmed);

  if (!Number.isNaN(parsedDate.getTime())) {
    return { unix: parsedDate.getTime(), utc: parsedDate.toUTCString() };
  }

  return null;
}

app.get('/', (req, res) => {
  res.json({
    message: 'Timestamp microservice',
    routes: ['/api/:date?', '/api'],
  });
});

app.get(['/api', '/api/:date?'], (req, res) => {
  const result = normalizeInput(req.params.date);

  if (!result) {
    return res.status(400).json({ error: 'Invalid Date' });
  }

  return res.json(result);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
