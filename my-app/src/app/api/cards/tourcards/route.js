import { NextResponse } from 'next/server';
import { connectDb } from '../../../../lib/config/db';
import dotenv from 'dotenv';
import TourCardModel from '../../../../lib/Model/tourcardData';

dotenv.config();

const dbConnection = async () => {
  await connectDb();
};
dbConnection();

export async function GET() {
  try {
    const data = await TourCardModel.find();
    return NextResponse.json(
      {
        success: true,
        cardata: data,
        message: 'your data is obtained successfully',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
