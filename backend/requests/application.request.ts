import zod from "zod";
import { status, internshipId, userId } from "./rules/application.rules";
import { paginateRules } from "./rules/paginate.rules";
import { filters } from "./filters/filters";

const indexApplicationSchema = zod.object({
  pagination: paginateRules,
  filters: filters,
});

const createApplicationSchema = zod.object({
  status: status,
  internshipId: internshipId,
  userId: userId,
});

const updateApplicationSchema = zod.object({
  status: status.optional(),
  internshipId: internshipId.optional(),
  userId: userId.optional(),
});

export {
  createApplicationSchema,
  updateApplicationSchema,
  indexApplicationSchema,
};
