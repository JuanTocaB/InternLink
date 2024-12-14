import zod from "zod";
import { nameRules, modulesRules } from "./rules/permission.rules";
import { paginateRules } from "./rules/paginate.rules";
import { filters } from "./filters/filters";

const indexPermissionSchema = zod.object({
  pagination: paginateRules,
  filters: filters,
});

const createPermissionSchema = zod.object({
  name: nameRules,
  modules: modulesRules,
});

const updatePermissionSchema = zod.object({
  name: nameRules.optional(),
  modules: modulesRules.optional(),
});

export {
  createPermissionSchema,
  updatePermissionSchema,
  indexPermissionSchema,
};
