# Chainlink Web Scraping External Adapter
This repository is a Chainlink external adapter to get data by web scraping.

## Input Params

| Key      |               | Description | Value Example |
|---------------|:-------------:|------------- |:---------|
| `id`     | **Required**  | `jobRunID` back to the chainlink node | `1` |
| `url`  | **Required**  | Specific website URL to scrape. | `http://abehiroshi.la.coocan.jp/movie/eiga.htm` |
| `path`  | **Required**  | Specific DOM tree to specify data. | `html.body.center.1.table` |
| `filter` | *Optional* | Specific DOM tree to filter data. | `tr.td.strong.a` |
| `isRawData`  | *Optional*  | Boolean whether to get json DOM tree data | `false` | 


## Output Format

```json
{
  "jobRunID": "1",
  "data": "HOKUSAI,のみとり侍,祈りの幕が下りる時,北の桜守,空海―KU-KAI―,海辺のリア,恋妻家宮本,疾風ロンド,海よりもまだ深く,「エヴェレスト 神々の山嶺」,カラスの親指,麒麟の翼,チョコレート・ファイター,ジェネラル・ルージュの凱旋,青い鳥,チーム・バチスタの栄光,魍魎の匣,大帝の剣,「雨鱒の川」,「プラトニックセックス」"
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
