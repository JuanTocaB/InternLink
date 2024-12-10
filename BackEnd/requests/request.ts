import { ZodSchema } from 'zod';

const validateRequest = (schema: ZodSchema ) => async (req: any, res: any, next: any) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (error) {
            res.status(400).json({ message: error.errors });
        }
    }

export default validateRequest;