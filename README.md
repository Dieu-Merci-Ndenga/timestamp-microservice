# Timestamp Microservice

A simple Express-based API that converts between Unix timestamps and UTC date strings.

## Usage

- GET /api
- GET /api/:date?

## Examples

- /api/2015-12-15
- /api/December%2015,%202015
- /api/1451001600000

## Response format

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

## Run locally

```bash
npm install
npm start
```
