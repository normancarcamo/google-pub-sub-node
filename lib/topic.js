'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line import/first
const pubsub_1 = require('@google-cloud/pubsub');
const pubsub = new pubsub_1.PubSub();
pubsub.createTopic('topic1').catch((err) => {
  // eslint-disable-next-line no-console
  console.error('TOPIC ERROR:', err);
});
//# sourceMappingURL=topic.js.map
