import { IUserDocument } from "../models/interfaces/user.interface";
import UserRepository from "../repositories/user.repository";
import RoleResource from "./role.resource";

const UserResource = async (id: string) => {
  const user: IUserDocument = (await UserRepository.show(id)) as IUserDocument;

  const roles = await Promise.all(
    user.roles.map(async (id: string) => {
      const role = await RoleResource(id);
      return {
        id: role.id,
        name: role.name,
        permissions: role.permissions,
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
};

export default UserResource;
