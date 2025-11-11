import { connectDb } from '../../../../lib/config/db';
import HotelModel from '../../../../lib/Model/hotelModel';
import { NextResponse } from 'next/server';
const dummyHotels = [
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761723448/Ooty_Lake_eefmes.webp',
    place: 'OOty',
    hotelName: 'Hotel LakeView',
    Price: 2892,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761723439/ooty_a3pmzc.webp',
    place: 'OOty',
    hotelName: 'IHCL SeleQtions',
    Price: 2500,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761723428/ooty_xfrvjt.webp',
    place: 'OOty',
    hotelName: 'Heritage View ',
    Price: 2022,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761723399/from-ooty-to-coonoor_kykoix.webp',
    place: 'OOty',
    hotelName: 'ootyHotel',
    Price: 2673,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761723376/caption_g7f2dq.jpg',
    place: 'OOty',
    hotelName: 'ootyHotel',
    Price: 2673,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761731134/water-suite-aerial-view_zr2iqd.jpg',
    place: 'Maldives',
    hotelName: 'Four Seasons',
    Price: 2892,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761731126/maldivees_onekwp.jpg',
    place: 'Maldives',
    hotelName: 'JW Marriot',
    Price: 2792,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761731117/mal_divves_vr0sgh.avif',
    place: 'Maldives',
    hotelName: 'Park Hyatt',
    Price: 2852,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761731107/images_zqdhkc.jpg',
    place: 'Maldives',
    hotelName: 'ootyHotel',
    Price: 2500,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761731082/huts-maldives-blue-water_tznafh.avif',
    place: 'Maldives',
    hotelName: 'ootyHotel',
    Price: 2892,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761733130/images_4_rnmvbz.jpg',
    place: 'Bahamas',
    hotelName: 'The Ocean Club',
    Price: 2679,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761733143/nasgwlx-155920281-signature-exterior-5464x3640_ahxcjd.avif',
    place: 'Bahamas',
    hotelName: 'Rosewood Baha Mar',
    Price: 2382,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761733160/TAL-elbow-reef-BESTHOTELSBAHAMAS0224-195bc33b4e7c46f4a4dec08343099275_muw52a.jpg',
    place: 'Bahamas',
    hotelName: 'Grand Hyatt',
    Price: 2892,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761733172/the-lagoon-beach-at-sandyport_1_tz2rcv.jpg',
    place: 'Bahamas',
    hotelName: 'ootyHotel',
    Price: 2392,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761733186/the-lagoon-beach-at-sandyport_jz7tkz.jpg',
    place: 'Bahamas',
    hotelName: 'ootyHotel',
    Price: 2882,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1762747214/images_sidiuw.jpg',
    place: 'Switzerland',
    hotelName: 'Park Hotel',
    Price: 2762,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1762747200/images_3_fld03d.jpg',
    place: 'Switzerland',
    hotelName: 'Baur au Lac',
    Price: 2092,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1762747190/images_2_yfug86.jpg',
    place: 'Switzerland',
    hotelName: 'The Woodward',
    Price: 2372,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1762747179/images_1_hz4nco.jpg',
    place: 'Switzerland',
    hotelName: 'ootyHotel',
    Price: 2500,
  },
  {
    AccomidationImg:
      'https://res.cloudinary.com/dhc4jveqp/image/upload/v1762747165/grindelwald_nxefct.webp',
    place: 'Switzerland',
    hotelName: 'ootyHotel',
    Price: 2800,
  },
];

const dbConnection = async () => {
  await connectDb();
};
dbConnection();

export async function GET() {
  try {
    await HotelModel.deleteMany({});
    console.log('cleared existing data');

    await HotelModel.insertMany(dummyHotels);
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
