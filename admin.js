const { kafka } = require('./client')

async function init(){
    const admin = kafka.admin()
    console.log("Admin connecting...");
    admin.connect()
    console.log("Admin connection success")

    console.log("Creating topics: ['rider-updates']")
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2
            }
        ]
    })
    console.log("Created topics: ['rider-updates']")

    console.log("Disconnecting admin")
    await admin.disconnect()
    console.log("Disconnected admin")
}

init()