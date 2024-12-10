import User from '../models/user.model';

const UserRepository = {
    async index() {
        try {
            return await User.find();
        } catch (error) {
            throw new Error(error);
        }
    },

    async show(id: string) {
        try {
            return await User.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    },

    async store(data: any) {
        try {
            return await User.create(data);
        } catch (error) {
            throw new Error(error);
        }
    },

    async update(id: string, data: any) {
        try {
            return await User.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw new Error(error);
        }
    },

    async delete(id: string) {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error);
        }
    }
};

export default UserRepository;