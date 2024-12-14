import zod from "zod";
import { nameRules, permissionsRules } from "./rules/role.rules";
import { filters } from "./filters/filters";
import { paginateRules } from "./rules/paginate.rules";

const indexRoleSchema = zod.object({
  pagination: paginateRules,
  filters: filters,
});

const createRoleSchema = zod.object({
  name: nameRules,
  permissions: permissionsRules,
});

const updateRoleSchema = zod.object({
  name: nameRules.optional(),
  permissions: permissionsRules.optional(),
});

export { createRoleSchema, updateRoleSchema, indexRoleSchema };
