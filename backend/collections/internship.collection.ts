import { IInternshipDocument } from "../models/interfaces/internship.interface";
import InternshipRepository from "../repositories/internship.repository";
import dotEnv from "dotenv";
import { paymentTime } from "../requests/rules/internship.rules";

dotEnv.config();

const InternshipCollection = async (
  pagination: any,
  filters: any,
  user: any,
) => {
  const internships: IInternshipDocument[] = (await InternshipRepository.index(
    pagination,
    filters,
  )) as IInternshipDocument[];

  const result = [];

  for (const internship of internships) {
    if (internship.userId === user.id) {
      result.push({
        id: internship.id,
        userId: internship.userId,
        companyName: internship.companyName,
        workingHours: internship.workingHours,
        salary: internship.salary,
        currency: internship.currency,
        paymentTime: internship.paymentTime,
        startDate: internship.startDate,
        endDate: internship.endDate,
        createdAt: internship.createdAt,
        updatedAt: internship.updatedAt,
      });
    } else if (user.roles.includes(process.env.USER_ROLE_ID as string)) {
      result.push({
        id: internship.id,
        userId: internship.userId,
        companyName: internship.companyName,
        workingHours: internship.workingHours,
        salary: internship.salary,
        currency: internship.currency,
        paymentTime: internship.paymentTime,
        startDate: internship.startDate,
        endDate: internship.endDate,
        createdAt: internship.createdAt,
        updatedAt: internship.updatedAt,
      });
    }
  }

  return result;
};

export default InternshipCollection;
