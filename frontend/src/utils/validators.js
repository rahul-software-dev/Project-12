export const isEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

export const isStrongPassword = (password) =>
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(password);

export const isPhoneNumber = (phone) => /^\d{10}$/.test(phone);

export const isNotEmpty = (value) => value && value.trim().length > 0;