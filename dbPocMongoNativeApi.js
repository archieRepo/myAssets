import {MongoClient} from 'mongodb';
//this is low level api method to conect mongo db using mongodb driver
const connectionUrl = 'mongodb://localhost:27017';
const databaseName = 'asset-manager';
console.log(connectionUrl);

const client = new MongoClient(connectionUrl);

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(databaseName);
    const collection = db.collection('documents');
    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);
    // the following code examples can be pasted here...
  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());