export const USERNAME_REGEX = /^[A-Za-z0-9.]{1,254}$/; // Allows alphanumeric, dot characters with min 1 & max 254 characters
export const ERROR_MESSAGE_USERNAME_Email_REQUIRED = "Username/ Email is required";
export const ERROR_MESSAGE_USERNAME_REGEX_VALIDATION =
  "Invalid username. Should contain letters & numbers with min 1 & max 254 characters";

export const USERNAME_Or_Email_MIN_LENGTH = 8;
export const USERNAME_Or_Email_MAX_LENGTH = 50;
export const PASSWORD_MIN_LENGTH = 10;
export const PASSWORD_MAX_LENGTH = 20;
export const ERROR_INVAID_PASSWORD_PATTERN = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
export const ERROR_INVALID_PASSWORD_MIN_LENGTH = `Password must be at least ${PASSWORD_MIN_LENGTH} characters long.`;
export const ERROR_INVALID_PASSWORD_MAX_LENGTH = `Password must be at most ${PASSWORD_MAX_LENGTH} characters long.`;
export const ERROR_INVALID_USERNAME_OR_EMAIL = "Please enter a valid email address or a valid username."