import z from "zod";
import {
  userNameRules,
  passwordRules,
  roleRules,
  emailRules,
} from "./rules/user.rules";
import { paginateRules } from "./rules/paginate.rules";
import { filters } from "./filters/filters";

const indexUserSchema = z.object({
  pagination: paginateRules,
  filters: filters,
});

const createUserSchema = z.object({
  username: userNameRules,
  email: emailRules,
  password: passwordRules,
  roles: roleRules,
});

const updateUserSchema = z.object({
  username: userNameRules.optional(),
  email: emailRules.optional(),
  password: passwordRules.optional(),
  roles: roleRules.optional(),
});

export { createUserSchema, updateUserSchema, indexUserSchema };
