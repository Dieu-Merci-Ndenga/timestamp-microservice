# Timestamp Microservice

A lightweight Express API that converts between Unix timestamps and UTC date strings. It accepts either a date string or a Unix timestamp, and returns a JSON object with the original Unix value and the corresponding UTC-formatted date.

This project is designed to be easy to run locally and simple to integrate with front-end apps, tests, or third-party services.

## Live demo

Try the deployed API here:

**[https://timestamp-microservice-8rg2.onrender.com](https://timestamp-microservice-8rg2.onrender.com)**

Example live endpoints:

- [Current timestamp](https://timestamp-microservice-8rg2.onrender.com/api)
- [Convert a date](https://timestamp-microservice-8rg2.onrender.com/api/2015-12-15)
- [Convert a Unix timestamp](https://timestamp-microservice-8rg2.onrender.com/api/1451001600000)

## Features

- Convert date strings such as `2015-12-15` or `December 15, 2015`
- Convert Unix timestamps in seconds or milliseconds
- Return the current timestamp when no date is provided
- Respond with JSON for easy client-side usage
- Built with Express and CORS support for browser access

## Live behavior

The API supports:

- `GET /api`
- `GET /api/:date?`

If no date is provided, the server returns the current timestamp.

## Example requests

### Local requests

```bash
curl http://localhost:3000/api
curl "http://localhost:3000/api/2015-12-15"
curl "http://localhost:3000/api/December%2015,%202015"
curl "http://localhost:3000/api/1451001600000"
```

### Live requests

```bash
curl https://timestamp-microservice-8rg2.onrender.com/api
curl "https://timestamp-microservice-8rg2.onrender.com/api/2015-12-15"
curl "https://timestamp-microservice-8rg2.onrender.com/api/1451001600000"
```

## Example responses

### Current time

```json
{
  "unix": 1730000000000,
  "utc": "Mon, 28 Oct 2024 00:00:00 GMT"
}
```

### Date conversion

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

### Invalid date

```json
{
  "error": "Invalid Date"
}
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Dieu-Merci-Ndenga/timestamp-microservice.git
cd timestamp-microservice
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

The app runs by default on:

```bash
http://localhost:3000
```

## Development

You can run the app in development mode using the same start script:

```bash
npm start
```

The project also includes a test script:

```bash
npm test
```

## Project structure

```text
.
├── server.js
├── package.json
├── README.md
└── node_modules/
```

## Notes

- Numeric values are treated as Unix timestamps.
- Values with 13 digits are interpreted as milliseconds.
- Values with 10 digits are interpreted as seconds.
- Date strings are parsed by JavaScript's native `Date` constructor.

## License

This project is licensed under the MIT License.

## Author

Built as a simple Node.js/Express microservice for timestamp conversion.
