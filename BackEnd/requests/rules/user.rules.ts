import zod from "zod";

const userNameRules = zod
  .string()
  .min(3, "Username must be at least 3 characters long")
  .max(20, "Username must be at most 20 characters long")
  .regex(
    /^[a-zA-Z0-9_.]+$/,
    "Username can only contain letters, numbers, underscores and periods",
  );

const passwordRules = zod
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(100, "Password must be at most 100 characters long")
  .refine((password) => /[A-Z]/.test(password), {
    message: "Password must contain at least one uppercase letter",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Password must contain at least one lowercase letter",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Password must contain at least one number",
  })
  .refine((password) => /[@$!%*?&#]/.test(password), {
    message: "Password must contain at least one special character",
  });

const emailRules = zod
  .string()
  .email("Invalid email address")
  .max(255, "Email must be at most 255 characters long");

const roleRules = zod.array(zod.string());

export { userNameRules, passwordRules, roleRules, emailRules };
