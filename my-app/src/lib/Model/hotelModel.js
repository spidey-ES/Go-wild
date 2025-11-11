import mongoose from 'mongoose';
const schemaRules = {
  AccomidationImg: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  hotelName: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
};
const dataSchema = new mongoose.Schema(schemaRules);
const HotelModel =
  mongoose.models.hotelmodels || mongoose.model('hotelmodels', dataSchema);

export default HotelModel;
