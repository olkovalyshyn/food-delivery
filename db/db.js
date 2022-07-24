const { MongoClient } = require('mongodb');
require('dotenv').config();
const uriDb = process.env.URI_DB;

const db = MongoClient.connect(uriDb, {
  useUnifiedTopology: true,
  maxPoolSize: 5,
});

process.on('SIGINT', async () => {
  const client = await db;
  client.close();
  console.log('Connection for db closed');
  process.exit(1);
});

module.exports = db;
