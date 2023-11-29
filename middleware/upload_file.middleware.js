import multer from "multer";
import path from "path";

const uploadProfilePicture = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/profilePictures/");
    },
    filename: function (req, file, cb) {
      let fileName = path.extname(file.originalname);
      cb(null, Date.now() + fileName);
    },
  });

  const imageType = ["image/png", "image/webp", "image/jpg", "image/jpeg"];

  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      if (imageType.includes(file.mimetype)) {
        console.log("Successful! Uploaded profile picture");
        cb(null, true);
      } else {
        console.log("Error while uploading profile picture");
        cb(null, false);
      }
    },
    limits: {
      fileSize: 1024 * 1024,
    },
  });

  return upload.single("profilePicture");
};

export default uploadProfilePicture;
