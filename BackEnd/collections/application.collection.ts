import { IApplicationDocument } from "../models/interfaces/application.interface";
import { IInternshipDocument } from "../models/interfaces/internship.interface";
import ApplicationRepository from "../repositories/application.repository";
import InternshipRepository from "../repositories/internship.repository";

const ApplicationCollection = async (pagination: any, filters: any) => {
  var applications: IApplicationDocument[] = (await ApplicationRepository.index(
    pagination,
    filters,
  )) as IApplicationDocument[];

  if (applications.length === 0) {
    const newFilters = { ...filters };
    newFilters.value = false;
    applications = (await ApplicationRepository.index(
      pagination,
      newFilters,
    )) as IApplicationDocument[];
  }

  var internships: IInternshipDocument[] = (await InternshipRepository.index(
    pagination,
    filters,
  )) as IInternshipDocument[];

  if (internships.length === 0) {
    const newFilters = { ...filters };
    newFilters.value = false;
    internships = (await InternshipRepository.index(
      pagination,
      newFilters,
    )) as IInternshipDocument[];
  }

  const result = [];
  for (const application of applications) {
    for (const internship of internships) {
      if (application.internshipId === internship.id) {
        result.push({
          id: application.id,
          internshipId: application.internshipId,
          userId: application.userId,
          status: application.status,
          internship: {
            companyName: internship.companyName,
            workingHours: internship.workingHours,
            salary: internship.salary,
            startDate: internship.startDate,
            endDate: internship.endDate,
          },
          createdAt: application.createdAt,
          updatedAt: application.updatedAt,
        });
      }
    }
  }

  return result;
};

export default ApplicationCollection;
