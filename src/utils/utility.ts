export const isValidEmail = (email: string): boolean => email.includes('@');

export const isValidPassword = (password: string): boolean =>
  password.length >= 8;
