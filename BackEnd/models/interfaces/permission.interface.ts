import IModule from "./module.interface";

interface IPermission {
  name: string;
  modules: IModule[];
}

export default IPermission;
