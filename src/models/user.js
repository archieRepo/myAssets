import mongoose from 'mongoose';
import { buildFindOneQuery } from '../utils/query-helper.js';

const { Schema, SchemaTypes } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: SchemaTypes.String,
      required: true,
    },
    username: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    email: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    password: {
      type: SchemaTypes.String,
      required: true,
    },
  },
  {
    timestamps: false,
    id: true,
    toJSON: {
      getters: true,
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret.__v;
        delete ret._id;
        delete ret.password;
        return ret;
      },
    },
    toObject: {
      getters: true,
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id.toString();
        delete ret.password;
        delete ret._id;
        return ret;
      },
    },
  },
);
UserSchema.methods.toJSON = function toJSON() {
  const user = this;
  const userObject = user.toObject();
  return userObject;
};

UserSchema.statics.create = async function create(data) {
  const userData = new this(data);
  const userValidation = await userData.save();
  return userValidation;
};

UserSchema.statics.findOneRecord = async function findOneRecord(options = {}) {
  const query = buildFindOneQuery(this, options);
  return query.exec();
};

export default { modelName: 'User', schema: UserSchema };
