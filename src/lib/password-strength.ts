export interface PasswordStrengthResult {
  score: number;
  label: "Very Weak" | "Weak" | "Fair" | "Strong" | "Very Strong";
  entropy: number;
  feedback: string[];
  /** Ready for breach check integration — hash prefix only, no plaintext sent */
  breachCheckReady: boolean;
}

const COMMON_PASSWORDS = new Set([
  "password", "123456", "12345678", "qwerty", "abc123", "password123",
  "admin", "letmein", "welcome", "monkey", "dragon", "master",
]);

export function checkPasswordStrength(password: string): PasswordStrengthResult {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push("Add lowercase letters");
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("Add uppercase letters");
  if (/[0-9]/.test(password)) score += 1;
  else feedback.push("Add numbers");
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  else feedback.push("Add special characters");

  if (COMMON_PASSWORDS.has(password.toLowerCase())) {
    score = 0;
    feedback.push("This is a commonly used password");
  }
  if (/(.)\1{2,}/.test(password)) feedback.push("Avoid repeated characters");
  if (/^[0-9]+$/.test(password)) feedback.push("Avoid numbers-only passwords");

  const charset =
    (/[a-z]/.test(password) ? 26 : 0) +
    (/[A-Z]/.test(password) ? 26 : 0) +
    (/[0-9]/.test(password) ? 10 : 0) +
    (/[^a-zA-Z0-9]/.test(password) ? 32 : 0);

  const entropy = password.length > 0 && charset > 0
    ? Math.round(password.length * Math.log2(charset))
    : 0;

  const labels: PasswordStrengthResult["label"][] = [
    "Very Weak", "Weak", "Fair", "Strong", "Very Strong", "Very Strong", "Very Strong", "Very Strong",
  ];
  const label = labels[Math.min(score, labels.length - 1)];

  if (password.length < 12) feedback.push("Use at least 12 characters for better security");

  return {
    score: Math.min(100, Math.round((score / 7) * 100)),
    label,
    entropy,
    feedback: feedback.length ? feedback : ["Password looks strong!"],
    breachCheckReady: password.length > 0,
  };
}
