import { connect } from 'amqplib';

async function doEverything() {
  const queue = 'tasks';
  const conn = await connect('amqp://localhost');

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queue);

  // Sender
  const ch2 = await conn.createChannel();

  setInterval(() => {
    ch2.sendToQueue(queue, Buffer.from('something to do: ' + performance.now()));
  }, 2000);
}
doEverything();