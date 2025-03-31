const CloudStorage = require("../utils/cloudStorage");

class CloudStorageService {
  async uploadPrescription(file) {
    try {
      return await CloudStorage.upload(file);
    } catch (error) {
      throw new Error("Error uploading prescription: " + error.message);
    }
  }

  async retrievePrescription(prescriptionId) {
    try {
      return await CloudStorage.getFile(prescriptionId);
    } catch (error) {
      throw new Error("Error retrieving prescription: " + error.message);
    }
  }

  async deletePrescription(prescriptionId) {
    try {
      return await CloudStorage.deleteFile(prescriptionId);
    } catch (error) {
      throw new Error("Error deleting prescription: " + error.message);
    }
  }
}

module.exports = new CloudStorageService();