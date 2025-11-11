import mongoose from 'mongoose';

const schemaRules = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
};
const dataSchema = new mongoose.Schema(schemaRules);
const userModel = mongoose.models.user || mongoose.model('user', dataSchema);

export default userModel;
