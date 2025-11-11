import { connectDb } from '../../../lib/config/db';
import dotenv from 'dotenv';
import datesDataModel from '../../../lib/Model/datesData';
import { NextResponse, NextRequest } from 'next/server';

dotenv.config();

const dbConnection = async () => {
  await connectDb();
};
dbConnection();

export async function GET() {
  console.log('your server is workin');

  return NextResponse.json({
    ms: true,
  });
}

// function parseDate(EnteredDate) {
//   const date = EnteredDate.split('-');
//   const day = date[0];
//   const month = date[1];
//   const year = date[2];
//   return new Date(`${year}-${month}-${day}`);
// }

export async function POST(req) {
  const { InDate, OutDate, place, Accomidations } = await req.json();
  if (!InDate || !OutDate || !place || !Accomidations) {
    return NextResponse.json(
      {
        success: false,
        message: 'please fill all the data ',
      },
      { status: 400 }
    );
  }
  try {
    const userBookings = new datesDataModel({
      InDate: InDate,
      OutDate: OutDate,
      place: place,
      Accomidations,
    });
    await userBookings.save();
    return NextResponse.json(
      {
        success: true,
        message: 'your dates are booked successfully ',
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
