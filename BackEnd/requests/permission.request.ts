import z from "zod";

const createPermissionSchema = z.object({
  name: z.string().min(3).max(255),
  modules: z.array(z.string()),
});

const updatePermissionSchema = z.object({
  name: z.string().min(3).max(255).optional(),
  modules: z.array(z.string()).optional(),
});

export { createPermissionSchema, updatePermissionSchema };
