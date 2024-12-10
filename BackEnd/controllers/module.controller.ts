import Repository from '../repositories/module.repository';
import Response from '../responses/response';

const ModuleController = {
    async index() {
        try {
            const modules = await Repository.index();
            return Response.success(
                modules, 
                'Modules retrieved successfully'
            );
        } catch (error) {
            return Response.error(
                error.message, 
                500
            );
        }
    },

    async get(id: string) {
        try {
            const module = await Repository.show(id);
            return Response.success(
                module, 
                'Module retrieved successfully'
            );
        } catch (error) {
            return Response.error(
                error.message, 
                500
            );
        }
    },

    async create(req: any) {
        try {
            const module = await Repository.store(req.body);
            return Response.success(
                module, 
                'Module created successfully'
            );
        } catch (error) {
            return Response.error(
                error.message, 
                500
            );
        }
    },

    async update(id: string, req: any) {
        try {
            const module = await Repository.update(id, req.body);
            return Response.success(
                module, 
                'Module updated successfully'
            );
        } catch (error) {
            return Response.error(
                error.message, 
                500
            );
        }
    },

    async remove(id: string) {
        try {
            const module = await Repository.delete(id);
            return Response.success(
                module, 
                'Module deleted successfully'
            );
        } catch (error) {
            return Response.error(
                error.message, 
                500
            );
        }
    }
};

export default ModuleController;    