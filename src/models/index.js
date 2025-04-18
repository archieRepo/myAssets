import User from './user.js';

export default (db) => {
  db.model(User.modelName, User.schema);
  return db;
};