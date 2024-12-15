import zod from "zod";
import { userNameRules, emailRules, passwordRules } from "./rules/user.rules";

const logInSchema = zod.object({
  usernameOrEmail: userNameRules.or(emailRules),
  password: passwordRules,
});

const logOutSchema = zod.object({});

const registerSchema = zod.object({
  username: userNameRules,
  email: emailRules,
  password: passwordRules,
});

export { logInSchema, logOutSchema, registerSchema };
