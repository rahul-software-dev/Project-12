const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { uploadToS3 } = require('./providers/s3Provider'); // Plug in other providers if needed
const logger = require('../utils/logger');

/**
 * Uploads a file to cloud storage.
 * @param {Object} file - File object (with originalname, mimetype, buffer).
 * @param {string} userId - ID of the uploading user.
 * @param {string} type - File category (e.g., 'prescription', 'record').
 * @returns {Promise<{ url: string, key: string }>} - Uploaded file info.
 */
async function uploadFile(file, userId, type = 'generic') {
  if (!file || !file.originalname || !file.buffer) {
    logger.error('[Upload] Invalid file input');
    throw new Error('Invalid file input');
  }

  const extension = path.extname(file.originalname);
  const safeType = type.replace(/\s+/g, '_').toLowerCase();
  const safeUserId = userId.toString().replace(/[^a-zA-Z0-9-_]/g, '');
  const filename = `${safeType}/${safeUserId}/${uuidv4()}${extension}`;

  try {
    const result = await uploadToS3({
      buffer: file.buffer,
      key: filename,
      mimetype: file.mimetype,
    });

    logger.info(`[Upload] File uploaded: ${filename}`);
    return result;
  } catch (err) {
    logger.error('[Upload] Upload failed:', err);
    throw new Error('File upload failed. Please try again.');
  }
}

module.exports = { uploadFile };