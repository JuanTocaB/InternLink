import { IUserDocument } from "../models/interfaces/user.interface";
import UserRepository from "../repositories/user.repository";
import RoleResource from "../resource/role.resource";

const UserCollection = async (pagination: any, filters: any) => {
  const users: IUserDocument[] = (await UserRepository.index(
    pagination,
    filters,
  )) as IUserDocument[];

  return await Promise.all(
    users.map(async (user) => {
      const roles = await Promise.all(
        user.roles.map(async (id: string) => {
          const role = await RoleResource(id);
          return {
            id: role.id,
            name: role.name,
          };
        }),
      );
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: roles,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    }),
  );
};

export default UserCollection;
