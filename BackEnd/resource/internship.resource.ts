import { IInternshipDocument } from "../models/interfaces/internship.interface";
import InternshipRepository from "../repositories/internship.repository";

const InternshipResource = async (id: string) => {
  const internship: IInternshipDocument = (await InternshipRepository.show(
    id,
  )) as IInternshipDocument;

  return {
    id: internship.id,
    companyName: internship.companyName,
    address: internship.address,
    description: internship.description,
    workingHours: internship.workingHours,
    requirements: internship.requirements,
    salary: internship.salary,
    currency: internship.currency,
    paymentTime: internship.paymentTime,
    startDate: internship.startDate,
    endDate: internship.endDate,
    createdAt: internship.createdAt,
    updatedAt: internship.updatedAt,
  };
};

export default InternshipResource;
