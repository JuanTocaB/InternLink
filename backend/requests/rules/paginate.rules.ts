import zod from "zod";

const paginateRules = zod.object({
  value: zod.boolean(),
  page: zod.number().positive(),
  limit: zod.number().positive(),
  order: zod.string(),
  field: zod.string(),
});

export { paginateRules };
