import z from 'zod';

const createModuleSchema = z.object({
    name: z.string().min(3).max(255),
    description: z.string()
});

const updateModuleSchema = z.object({
    name: z.string().min(3).max(255).optional(),
    description: z.string().optional()
});

export { createModuleSchema, updateModuleSchema };