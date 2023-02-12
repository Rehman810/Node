import cloudinary from "./cloudinary.js";
import multer from "multer";
import MensRAnking from "../src/models/mens.js";
import jwt from "jsonwebtoken";

const uploadFiles = async (req, res) => {
  const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "images");
      },
      filename: function (req, file, cb) {
        const split = file.originalname.split(".");
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(
          null,
          file.fieldname + "-" + uniqueSuffix + "." + split[split.length - 1]
        );
      },
    }),
  }).single("images");
  upload(req, res, (err) => {
    if (err) return res.status(500).send(err);
    cloudinary.v2.uploader
      .upload(req.file.path)
      .then((result) => res.status(200).send(send(result.url)))
      .catch((err) => res.status(500).send(err));
  });
  const getIdFromToken = (token) => {
    try {
      const decoded = jwt.decode(token);
      return decoded._id;
    } catch (err) {
      return null;
    }
  };
  const getTokenFromRequest = (req) => {
    const header = req.header("Authorization");
    if (!header) return null;

    const [bearer, token] = header.split(" ");
    if (bearer !== "Bearer") return null;
    return token;
  };

  const send = async (url) => {
    const token = getTokenFromRequest(req);
    console.log(token, "token");
    const id = getIdFromToken(token);
    console.log(id, "id");
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const Update = await MensRAnking.findByIdAndUpdate(id, {
      $set: {
        image_url: url,
      },
    });
  };
};

export default uploadFiles;
