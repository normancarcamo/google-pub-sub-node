"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line import/first
const pubsub_1 = require("@google-cloud/pubsub");
const pubSubClient = new pubsub_1.PubSub();
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
//# sourceMappingURL=publisher.js.map