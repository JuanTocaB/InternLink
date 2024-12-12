import z from "zod";

const createRoleSchema = z.object({
  name: z.string().min(3).max(255),
  permissions: z.array(z.string()),
});

const updateRoleSchema = z.object({
  name: z.string().min(3).max(255).optional(),
  permissions: z.array(z.string()).optional(),
});

export { createRoleSchema, updateRoleSchema };
