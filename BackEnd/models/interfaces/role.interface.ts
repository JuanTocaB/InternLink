import IPermission from "./permission.interface";

interface IRole {
  name: string;
  permissions: IPermission[];
}

export default IRole;
