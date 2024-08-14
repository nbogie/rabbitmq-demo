//@ts-check
import { connect } from "amqplib";
import { getEnvironmentVariableOrFail } from "./getEnvironmentVariableOrFail.js";
const exchangeURL = getEnvironmentVariableOrFail("AMQP_EXCHANGE_URL");

//We've put all work in a function just so we can use async/await
async function doSendingDemo() {
    const queueName = "neill-tasks";
    const conn = await connect(exchangeURL);

    const channel = await conn.createChannel();
    //will only create the queue if it doesn't already exist
    await channel.assertQueue(queueName, { durable: false });

    const msgToSend = Buffer.from(
        "Hello from javascript. timestamp: " + performance.now(),
    );
    channel.sendToQueue(queueName, msgToSend);
    console.log("🌈 I sent a message to queue named: " + queueName + "!");
    conn.close();
}
doSendingDemo();
