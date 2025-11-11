import { NextRequest, NextResponse } from 'next/server';
import { connectDb } from '../../../../lib/config/db';

import dotenv from 'dotenv';
import { cookies } from 'next/headers';
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
export async function POST(request: NextRequest) {
  try {
    (await cookies()).delete('goWild_JWT');
    return NextResponse.json({
      success: true,
      message: 'sucessfully logged out',
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
