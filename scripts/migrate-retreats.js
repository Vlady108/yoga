const mongoose = require('mongoose');

const oldUri = 'mongodb+srv://artemruben95_db_user:1111@cluster0.c5avoit.mongodb.net/?appName=Cluster0';
const newUri = 'mongodb+srv://vlady108_db_user:vlqUxtdEo1dOy3JM@cluster0.18e8cjm.mongodb.net/?appName=Cluster0';

async function migrate() {
  // Connect to old DB
  console.log('Connecting to OLD DB...');
  const oldConn = await mongoose.createConnection(oldUri, { serverSelectionTimeoutMS: 10000 });
  console.log('Connected to OLD DB');

  // Wait for the connection to fully establish
  await oldConn.asPromise();
  const retreats = await oldConn.db.collection('retreats').find({}).toArray();
  console.log('Found', retreats.length, 'retreats:');
  retreats.forEach(r => console.log(' -', r.title.ru, '|', r.title.en));

  // Save backup
  const fs = require('fs');
  fs.writeFileSync('/Users/Shared/yoga/retreats-backup.json', JSON.stringify(retreats, null, 2));
  console.log('Backup saved to retreats-backup.json');

  await oldConn.close();

  // Connect to new DB
  console.log('\nConnecting to NEW DB...');
  try {
    const newConn = await mongoose.createConnection(newUri, { serverSelectionTimeoutMS: 10000 });
    await newConn.asPromise();
    console.log('Connected to NEW DB');

    // Check if retreats already exist
    const existing = await newConn.db.collection('retreats').countDocuments();
    if (existing > 0) {
      console.log('WARNING: New DB already has', existing, 'retreats. Skipping insert.');
    } else {
      const toInsert = retreats.map(r => {
        const { _id, ...rest } = r;
        return rest;
      });
      const result = await newConn.db.collection('retreats').insertMany(toInsert);
      console.log('Successfully inserted', result.insertedCount, 'retreats into NEW DB!');
    }

    await newConn.close();
  } catch (e) {
    console.error('Cannot connect to NEW DB:', e.message);
    console.log('\nRetreats are saved in retreats-backup.json');
    console.log('You need to whitelist your IP in MongoDB Atlas for vlady108 cluster.');
    console.log('Go to: https://cloud.mongodb.com → Network Access → Add IP Address → Allow Access from Anywhere');
  }

  process.exit(0);
}

migrate().catch(e => {
  console.error('Migration failed:', e.message);
  process.exit(1);
});
