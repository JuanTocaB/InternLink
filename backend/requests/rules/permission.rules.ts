import zod from "zod";

const nameRules = zod
  .string()
  .min(3, "Name must be at least 3 characters long")
  .max(255, "Name must be at most 255 characters long");

const modulesRules = zod.array(zod.string());

export { nameRules, modulesRules };
