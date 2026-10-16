import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const uploadDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../uploads",
);
fs.mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadDirectory);
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
