const { Kafka } = require('kafkajs');

exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ["103.77.2.93:9092"]
})