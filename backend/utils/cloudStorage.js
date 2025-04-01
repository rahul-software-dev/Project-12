const fs = require("fs");
const path = require("path");
const multer = require("multer");

// Uncomment the service you want to use

// AWS S3 Configuration
// const AWS = require("aws-sdk");
// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
// });

// Google Cloud Storage
// const { Storage } = require("@google-cloud/storage");
// const gcs = new Storage({ keyFilename: process.env.GCS_KEYFILE });
// const bucket = gcs.bucket(process.env.GCS_BUCKET_NAME);

// Setup local storage (for development/testing)
const uploadDir = path.join(__dirname, "../uploads/");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

// Upload function (Supports Local, AWS S3, or GCS)
async function uploadFile(file) {
    if (!file) throw new Error("No file provided");

    // Local storage (development/testing)
    const filePath = path.join(uploadDir, file.filename);
    return { url: `/uploads/${file.filename}`, path: filePath };

    // AWS S3 Example:
    // const params = {
    //     Bucket: process.env.S3_BUCKET_NAME,
    //     Key: file.filename,
    //     Body: fs.createReadStream(file.path),
    //     ContentType: file.mimetype
    // };
    // await s3.upload(params).promise();
    // return { url: `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${file.filename}` };

    // Google Cloud Storage Example:
    // const blob = bucket.file(file.filename);
    // await blob.save(fs.createReadStream(file.path), { contentType: file.mimetype });
    // return { url: `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}/${file.filename}` };
}

// Delete file (Supports Local, AWS S3, or GCS)
async function deleteFile(filePath) {
    if (!filePath) throw new Error("No file path provided");

    // Local storage
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return { message: "File deleted successfully" };
    }

    // AWS S3 Example:
    // const params = { Bucket: process.env.S3_BUCKET_NAME, Key: filePath };
    // await s3.deleteObject(params).promise();
    // return { message: "File deleted from S3" };

    // Google Cloud Storage Example:
    // await bucket.file(filePath).delete();
    // return { message: "File deleted from Google Cloud Storage" };
}

module.exports = { upload, uploadFile, deleteFile };