// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// eslint-disable-next-line import/first
import { PubSub } from '@google-cloud/pubsub';

const pubsub = new PubSub();

// eslint-disable-next-line no-console
console.log(pubsub);
// const data = 'this is data : ' + new Date().toString();
//      const dataBuffer = Buffer.from(data);
//      const topicName = 'ypur-topic-name';

//      pubsub
//        .topic(topicName)
//        .publisher()
//        .publish(dataBuffer)
//        .then((messageId) => {
//          console.log(`Message ${messageId} published.`);
//          return res.status(200).json({ success: true });
//        })
//        .catch((err) => {
//          console.error('ERROR:', err);
//        });
