import mongoose from 'mongoose';
import { database } from '../config/app-config.js';
import { logger } from '../utils/logger.js';
import MongooseModels from '../models/index.js';

class DbConnect {
  static db;

  connect() {
    const db = mongoose.createConnection(process.env.AUTH_SERVER_MONGODB_URL || database.url);

    MongooseModels(db);

    db.on('error', (error) => {
      logger.error('[DB-connection] Error: ', error);
    });

    db.on('disconnected', (error) => {
      logger.error('[DB-connection] Disconnected: ', error);
    });

    db.on('error', (error) => {
      logger.error('[Db-connection] Error: ', JSON.stringify(error.stack));
    });

    db.on('reconnected', (error) => {
      logger.info('[DB-connection] Reconnected: ', error);
    });

    db.once('open', () => {
      logger.info('[DB-connection] Connection established successfully');
    });
    DbConnect.db = db;
  }
}
const dbConnect = new DbConnect();
dbConnect.connect();

export default DbConnect.db;