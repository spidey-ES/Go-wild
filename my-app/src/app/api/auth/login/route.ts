import { NextRequest, NextResponse } from 'next/server';
import { connectDb } from '../../../../lib/config/db';
import userModel from '../../../../lib/Model/userModel';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = async () => {
  await connectDb();
};
dbConnection();

export async function GET() {
  console.log('your login server is workin');

  return NextResponse.json({
    ms: true,
  });
}
const seceret = process.env.SCERET_KEY || 'default-secret';

export async function POST(request: NextRequest) {
  const cookie = await cookies();
  const { email, password } = await request.json();
  if (!email || !password) {
    return NextResponse.json(
      {
        success: false,
        message: 'please fill all the details',
      },
      { status: 500 }
    );
  }
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'user not registered please signUp',
        },
        { status: 400 }
      );
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          message: 'password mismatched',
        },
        { status: 400 }
      );
    }
    const token = Jwt.sign({ id: user._id }, seceret, {
      expiresIn: '1d',
    });
    cookie.set('goWild_JWT', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 24 * 60 * 60 * 1000,
      path: '/',
    });
    return NextResponse.json(
      {
        success: true,
        message: 'User Loggedin successfully.',
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
