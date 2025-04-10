const { getSignedUrlFromS3 } = require('./providers/s3Provider');
const logger = require('../utils/logger');

/**
 * Retrieves a signed URL to access a file securely.
 * @param {string} fileKey - Path/key of the file in storage.
 * @param {number} expiresIn - Duration in seconds (default: 3600s = 1 hour).
 * @returns {Promise<string>} - Signed URL to access the file.
 */
async function retrieveFileUrl(fileKey, expiresIn = 3600) {
  if (!fileKey) {
    logger.warn('[Retrieve] Missing file key');
    throw new Error('File key is required');
  }

  try {
    const signedUrl = await getSignedUrlFromS3(fileKey, expiresIn);
    logger.info(`[Retrieve] Signed URL generated for ${fileKey}`);
    return signedUrl;
  } catch (err) {
    logger.error('[Retrieve] Failed to generate signed URL:', err);
    throw new Error('Could not retrieve file URL. Please try again later.');
  }
}

module.exports = { retrieveFileUrl };