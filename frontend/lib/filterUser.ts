export type User = {
  id: string;
  username: string;
  email: string;
  roles: Role[];
};

export type Role = {
  id: string;
  name: string;
  permissions: Permission[];
};

export type Permission = {
  id: string;
  name: string;
  modules: Module[];
};

export type Module = {
  id: string;
  name: string;
};

const filterUser = (user: User) => {
  const navItemsResult = [];
  const permissionsResult = [];
  const navItems = user.roles.map((role) => {
    return role.permissions.map((permission) => {
      if (permission.name === "Read") {
        return permission.modules.map((module) => {
          navItemsResult.push(module.name);
        });
      }
    });
  });
  const permissions = user.roles.map((role) => {
    return role.permissions.map((permission) => {
      permissionsResult.push(permission.name);
    });
  });

  return {
    navItems: navItemsResult,
    permissions: permissionsResult,
  };
};

export { filterUser };
