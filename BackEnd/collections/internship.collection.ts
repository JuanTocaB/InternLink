import { IInternshipDocument } from "../models/interfaces/internship.interface";
import InternshipRepository from "../repositories/internship.repository";

const InternshipCollection = async (pagination: any, filters: any) => {
  const internships: IInternshipDocument[] = (await InternshipRepository.index(
    pagination,
    filters,
  )) as IInternshipDocument[];

  return internships.map((internship) => {
    return {
      id: internship.id,
      companyName: internship.companyName,
      workingHours: internship.workingHours,
      salary: internship.salary,
      startDate: internship.startDate,
      endDate: internship.endDate,
      createdAt: internship.createdAt,
      updatedAt: internship.updatedAt,
    };
  });
};

export default InternshipCollection;
