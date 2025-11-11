import { connectDb } from '../../../../../lib/config/db';
import TourCardModel from '../../../../../lib/Model/tourcardData';
import { NextResponse } from 'next/server';

const cardsData = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761327780/maldives_hpd9on.jpg',
    title: 'Resorts',
    place: 'Maldives',
    rating: 4,
    price: 3000,
    days: 4,
    persons: 2,
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328360/beaches_aesa7k.jpg',
    title: 'Beaches',
    place: 'Hawai',
    rating: 4.5,
    price: 5000,
    days: 5,
    persons: 4,
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328822/fishing_bhybih.png',
    title: 'Fishing',
    place: 'Bahamas',
    rating: 4.5,
    price: 4000,
    days: 5,
    persons: 4,
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328786/kayaking_xmqhz5.jpg',
    title: 'Kayaking',
    place: 'Maldives',
    rating: 4,
    price: 3000,
    days: 4,
    persons: 2,
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328478/paraglaiding_wtygm0.jpg',
    title: 'Paragliding',
    place: 'Chamonix',
    rating: 4.2,
    price: 5000,
    days: 4,
    persons: 5,
  },
  {
    id: 6,
    img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328460/mountain-trekking_y8rtx8.jpg',
    title: 'Mountain Trucking',
    place: 'Himalays',
    rating: 4.5,
    price: 4000,
    days: 7,
    persons: 5,
  },
];
const dbConnection = async () => {
  await connectDb();
};
dbConnection();

export async function GET() {
  try {
    await TourCardModel.deleteMany({});
    console.log('cleared existing data');

    await TourCardModel.insertMany(cardsData);
    console.log('data added successfully');

    return NextResponse.json({
      success: true,
      message: 'your database is created successfullly',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    );
  }
}
