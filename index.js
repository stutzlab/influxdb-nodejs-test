const {InfluxDB} = require('@influxdata/influxdb-client')

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const org = '156b451382ce5892'
const bucket = process.env.INFLUXDB_BUCKETID
const token = process.env.INFLUXDB_TOKEN

const client = new InfluxDB({url: 'https://us-west-2-1.aws.cloud2.influxdata.com', token: token})

console.log("Using bucketId=" + bucket + "; token=" + token)

const writeApi = client.getWriteApi(org, bucket)

for(var i=0; i<200; i++) {
    const data = 'mem,host=host'+ Math.round(getRandomArbitrary(1,5)) +' used_percent=' + getRandomArbitrary(0,100) // Line protocol string
    writeApi.writeRecord(data)
    console.log(i)
} 

writeApi
    .close()
    .then(() => {
        console.log('FINISHED')
    })
    .catch(e => {
        console.error(e)
        console.log('\nERROR')
    })

