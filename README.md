# Chainlink Web Scraping External Adapter
This repository is a Chainlink external adapter to get data by web scraping.

## Input Params

| Key      |               | Description | Value Example |
|---------------|:-------------:|------------- |:---------|
| `id`     | **Required**  | `jobRunID` back to the chainlink node | `1` |
| `url`  | **Required**  | Specific website URL to scrape. | `http://abehiroshi.la.coocan.jp/movie/eiga.htm` |
| `path`  | **Required**  | Specific DOM tree to specify data. | `html.body.center.1.table` |
| `index`  | **Required**  | Specific index number of scraped data. | `0` | 
| `filter` | *Optional* | Specific DOM tree to filter data. | `tr.td.strong.a` |



## Output Format

```json
{
  "jobRunID": "1",
  "data": "HOKUSAI"
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
