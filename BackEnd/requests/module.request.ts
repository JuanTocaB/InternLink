import zod from "zod";
import { nameRules, descriptionRules } from "./rules/module.rules";
import { paginateRules } from "./rules/paginate.rules";
import { filters } from "./filters/filters";

const indexModuleSchema = zod.object({
  pagination: paginateRules,
  filters: filters,
});

const createModuleSchema = zod.object({
  name: nameRules,
  description: descriptionRules,
});

const updateModuleSchema = zod.object({
  name: nameRules.optional(),
  description: descriptionRules.optional(),
});

export { createModuleSchema, updateModuleSchema, indexModuleSchema };
