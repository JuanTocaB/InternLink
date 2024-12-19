import zod from "zod";
import {
  companyNamesRules,
  address,
  description,
  workingHours,
  salary,
  startDate,
  endDate,
} from "./rules/internship.rules";
import { paginateRules } from "./rules/paginate.rules";
import { filters } from "./filters/filters";

const indexInternshipSchema = zod.object({
  pagination: paginateRules,
  filters: filters,
});

const createInternshipSchema = zod.object({
  companyName: companyNamesRules,
  userId: zod.string(),
  address: address,
  description: description,
  workingHours: workingHours,
  salary: salary,
  startDate: startDate,
  endDate: endDate,
});

const updateInternshipSchema = zod.object({
  companyName: companyNamesRules.optional(),
  userId: zod.string().optional(),
  address: address.optional(),
  description: description.optional(),
  workingHours: workingHours.optional(),
  salary: salary.optional(),
  startDate: startDate.optional(),
  endDate: endDate.optional(),
});

export {
  createInternshipSchema,
  updateInternshipSchema,
  indexInternshipSchema,
};
