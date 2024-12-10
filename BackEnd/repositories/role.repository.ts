import Role from '../models/role.model';

const RoleRepository = {
    async index() {
        try {
            return await Role.find();
        } catch (error) {
            throw new Error(error);
        }
    },

    async show(id: string) {
        try {
            return await Role.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    },

    async store(data: any) {
        try {
            return await Role.create(data);
        } catch (error) {
            throw new Error(error);
        }
    },

    async update(id: string, data: any) {
        try {
            return await Role.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw new Error(error);
        }
    },

    async delete(id: string) {
        try {
            return await Role.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error);
        }
    }
};

export default RoleRepository;