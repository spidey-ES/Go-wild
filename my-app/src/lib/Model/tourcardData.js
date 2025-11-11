import mongoose from 'mongoose';

const schemaRules = {
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true, //ratin,price,days,persons
  },
  place: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  persons: {
    type: Number,
    required: true,
  },
};
const dataSchema = new mongoose.Schema(schemaRules);
const TourCardModel =
  mongoose.models.tourcard || mongoose.model('tourcard', dataSchema);

export default TourCardModel;
