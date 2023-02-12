import * as dotenv from "dotenv";
dotenv.config();

export default {
  //   jwt_secret: process.env.JWT_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
};
