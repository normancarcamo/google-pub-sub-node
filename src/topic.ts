// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// eslint-disable-next-line import/first
import { PubSub } from '@google-cloud/pubsub';

const pubsub = new PubSub();

pubsub.createTopic('topic1').catch((err) => {
  // eslint-disable-next-line no-console
  console.error('TOPIC ERROR:', err);
});
