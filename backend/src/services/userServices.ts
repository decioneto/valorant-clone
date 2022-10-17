import UserModel from '../models/User';

class UserServices {
    async getUsers() {
        return await UserModel.find();
    }

    async createUser(user: typeof UserModel) {
        return await UserModel.create(user);
    }

    async getUserbyEmail(email: string) {
        return await UserModel.findOne({ email: email });
    }

    async updatePassword(email: string, newPassword: string) {
        return await UserModel.updateOne({
            email: email,
            password: newPassword,
        });
    }
}

export default new UserServices();
