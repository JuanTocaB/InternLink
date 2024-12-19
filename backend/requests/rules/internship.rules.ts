import zod from "zod";

const companyNamesRules = zod
  .string()
  .min(3, "Company name must be at least 3 characters long")
  .max(255, "Company name must be at most 255 characters long");

const address = zod.string();
const description = zod.string();
const workingHours = zod.number();
const salary = zod.number();
const currency = zod.string().max(3);
const paymentTime = zod.string().max(10);
const startDate = zod.string();
const endDate = zod.string();

export {
  companyNamesRules,
  address,
  description,
  workingHours,
  salary,
  currency,
  paymentTime,
  startDate,
  endDate,
};
