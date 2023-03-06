import { model, Schema } from 'mongoose';

import { User } from '../../interfaces';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
  },
  addresses: [
    {
      type: String,
    },
  ],
});

export default model<User>('User', userSchema);
