import { PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH, ERROR_INVALID_USERNAME_OR_EMAIL, ERROR_INVALID_PASSWORD_MIN_LENGTH, ERROR_INVALID_PASSWORD_MAX_LENGTH, ERROR_INVAID_PASSWORD_PATTERN } from "../constants/user";

export const validatePassword = (password: string): string => {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  if (
    !uppercaseRegex.test(password) ||
    !lowercaseRegex.test(password) ||
    !digitRegex.test(password) ||
    !specialCharRegex.test(password)
  ) {
    return ERROR_INVAID_PASSWORD_PATTERN;
  }

  if (password.length < PASSWORD_MIN_LENGTH) {
    return ERROR_INVALID_PASSWORD_MIN_LENGTH;
  }

  if (password.length > PASSWORD_MAX_LENGTH) {
    return ERROR_INVALID_PASSWORD_MAX_LENGTH;
  }

  return '';
};

export const validateUsernameOrEmail = (input: string) => {
  // regex  for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the input is a valid email address
  if (emailRegex.test(input)) {
    return '';
  }

  // Check if the input is a valid username
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (usernameRegex.test(input)) {
    return '';
  }

  return ERROR_INVALID_USERNAME_OR_EMAIL;
}