import zod from "zod";

const filters = zod.object({
  value: zod.boolean(),
  searchTerm: zod.string().optional(),
});

export { filters };
