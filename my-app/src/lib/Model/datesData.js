import mongoose from 'mongoose';
const schemaRules = {
  InDate: {
    type: Date,
    required: true,
  },
  OutDate: {
    type: Date,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  Accomidations: {
    type: String,
    required: true,
  },
};
const dataSchema = new mongoose.Schema(schemaRules);
const datesDataModel =
  mongoose.models.bookingdates || mongoose.model('bookingdates', dataSchema);

export default datesDataModel;
