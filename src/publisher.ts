// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// eslint-disable-next-line import/first
import { PubSub } from '@google-cloud/pubsub';

const pubSubClient = new PubSub();

// In this example, the message is current time
const data = `this is data: ${new Date().toString()}`;
const dataBuffer = Buffer.from(data);
const topicName = 'post';

pubSubClient
  .topic(topicName)
  .publisher.publish(dataBuffer)
  .then((messageId) => {
    // eslint-disable-next-line no-console
    console.log(`Message ${messageId} published.`);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('ERROR:', err);
  });
