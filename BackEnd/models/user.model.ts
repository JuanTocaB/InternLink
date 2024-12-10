import mongoose from 'mongoose';
import Role from './role.model';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    Role.schema,
    { required: true },
  ],
});

const User = mongoose.model('User', UserSchema);

export default User;