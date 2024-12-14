import zod from "zod";

const status = zod.string().max(10);
const internshipId = zod.string();
const userId = zod.string();

export { status, internshipId, userId };
