# InfluxData NodeJS API Test

InfluxDB cloud with NodeJS client test

## Usage

- Create a new Account at InfluxDB Cloud (https://cloud2.influxdata.com/login)

- git clone this repo

- Bucket - is a influxdb "database"

  - Create a new Token on InfluxDB Panel at Data -> Buckets

  - Place bucketId contents as ENV INFLUXDB_BUCKETID in docker-compose.yml

- Token - access keys for writing or reading influxdb

  - Create a new Token on InfluxDB Panel at Data -> Tokens -> Button Generate

  - Choose the buckets to give access to and generate the Token

  - Place token contents as ENV INFLUXDB_TOKEN in docker-compose.yml

- docker-compose up --build

- curl -X POST http://localhost:3000/data
