// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// eslint-disable-next-line import/first
import { PubSub } from '@google-cloud/pubsub';

const pubsub = new PubSub();

const subscriptionName = 'sub1';
const timeout = 60;

const subscription = pubsub.subscription(subscriptionName);

let messageCount = 0;

/**
 * Handler for received message.
 * @param {Object} message
 */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const messageHandler = (message: any) => {
  // eslint-disable-next-line no-console
  console.log(`Received message ${message.id}:`);
  // eslint-disable-next-line no-console
  console.log(`Data: ${message.data}`);
  // eslint-disable-next-line no-console
  console.log(`tAttributes: ${message.attributes}`);
  messageCount += 1;

  // Ack the messae
  message.ack();
};

// Listen for new messages until timeout is hit
subscription.on(`message`, messageHandler);
setTimeout(() => {
  subscription.removeListener('message', messageHandler);
  // eslint-disable-next-line no-console
  console.log(`${messageCount} message(s) received.`);
}, timeout * 1000);
