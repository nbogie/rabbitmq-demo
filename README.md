tiny node.js demos of talking to rabbitmq.

Using promise API, and using ESModules.

The content is modified from one of two sources:

-   rabbitmq tutorials: https://www.rabbitmq.com/tutorials/tutorial-one-javascript
-   amqplib examples: https://www.npmjs.com/package/amqplib

See also AMQPLib's port of rabbitmq tutorials: https://github.com/amqp-node/amqplib/tree/main/examples/tutorials

# Setup

```bash
cp .env.example .env
```

then edit `.env` with a connection-string for an AMQP-broker. (e.g. from cloudamqp).

# running

Then run

```bash
yarn start-receiver-2
```

Then in another terminal run

```bash
yarn start-sender-2
```

Then modify and write your own sender code.

Try stopping the consumer and having the sender send messages when your consumer is stopped.

_Then_ run the consumer. What do you notice?

Then run the two processes on different machines! (e.g. with a colleague)

# The sender code looks a bit complex,

I recommend looking at `src/promise-api-2/simplestSend.js` for the simplest code for connecting and sending a single message, assuming you're happy working with promises and async-await.
You should run this with

```bash
yarn start-simplest-sender
```

## Help: It says I'm missing an environment variable

1. follow setup above to make sure you have a .env file in the top directory of this repo.
2. make sure you have told node.js to read the .env file:

My code assumes you are running node with the more-recent command-line argument to read a specific .env file's contents into `process.env`:

```bash
node --env-file=.env src/promise-api-2/simplestSend.js
```

However, if you prefer, you could alternatively install and use the `dotenv` package to read .env files into the `process.env` object.
