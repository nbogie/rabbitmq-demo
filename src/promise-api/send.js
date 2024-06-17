
import { connect } from 'amqplib';

//We've put all work in a function just so we can use async/await
async function doSendingDemo() {
  const queueName = 'tasks';
  const conn = await connect('amqp://localhost');

  const channel = await conn.createChannel();
  //will only create the queue if it doesn't already exist
  await channel.assertQueue(queueName, { durable: false });
  console.log("Sender ready to start sending messages to channel")

  setInterval(() => {
    const msgToSend = Buffer.from('something to do: ' + performance.now());
    channel.sendToQueue(queueName, msgToSend);
  }, 2000);

  setTimeout(() => { connection.close(); process.exit(0) }, 10000);
}
doSendingDemo();