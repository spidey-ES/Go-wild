import { NextResponse } from 'next/server';
import { connectDb } from '../../../../lib/config/db';
import userModel from '../../../../lib/Model/userModel';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
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
const secret = process.env.SCERET_KEY;

export async function POST(req) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json(
      {
        success: false,
        message: 'please fill all the data',
      },
      { status: 400 }
    );
  }
  try {
    const exisistinUser = await userModel.findOne({ email });
    if (exisistinUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'user Already present',
        },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();

    const token = Jwt.sign({ id: user._id }, secret, {
      expiresIn: '1d',
    });

    cookies().set('goWild_JWT', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 24 * 60 * 60 * 1000,
      path: '/',
    });

    return NextResponse.json(
      { success: true, message: 'User registered successfully.' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
