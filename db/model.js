const db = require('./db');

const getAll = async () => {
  const client = await db;
  const collection = await client.db().collection('goods');
  const result = await collection.find({}).toArray();
  return result;
};
