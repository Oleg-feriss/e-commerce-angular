import { User } from '../../interfaces';
import userModel from '../models/user.model';

export class UserRepository {
  async findAll(): Promise<User[]> {
    return await userModel.find();
  }

  async findById(id: string): Promise<User | null> {
    return await userModel.findById(id).select('-passwordHash');
  }

  async getByEmail(email: string): Promise<User | null> {
    return await userModel.findOne({ email });
  }

  async getByPhone(phoneNumber: string): Promise<User | null> {
    return await userModel.findOne({ phoneNumber });
  }

  async createUser(user: User): Promise<User> {
    return await userModel.create(user);
  }

  async updateUser(id: string, user: User): Promise<User | null> {
    return await userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
  }

  async deleteUser(id: string): Promise<User | null> {
    return await userModel.findByIdAndDelete(id);
  }
}
