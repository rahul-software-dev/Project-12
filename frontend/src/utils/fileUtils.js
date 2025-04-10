export const isValidFileType = (file, allowedTypes) =>
    allowedTypes.includes(file.type);
  
  export const isValidFileSize = (file, maxSizeMB = 5) =>
    file.size / (1024 * 1024) <= maxSizeMB;
  
  export const getFilePreview = (file) =>
    file && URL.createObjectURL(file);