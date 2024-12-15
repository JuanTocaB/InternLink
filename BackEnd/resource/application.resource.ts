import { IApplicationDocument } from "../models/interfaces/application.interface";
import { IInternshipDocument } from "../models/interfaces/internship.interface";
import ApplicationRepository from "../repositories/application.repository";
import InternshipRepository from "../repositories/internship.repository";

const ApplicationResource = async (id: string, user: any) => {
  const application: IApplicationDocument = (await ApplicationRepository.show(
    id,
  )) as IApplicationDocument;

  const internship: IInternshipDocument = (await InternshipRepository.show(
    application.internshipId,
  )) as IInternshipDocument;

  if (application.userId === user.id)
    return {
      id: application.id,
      internshipId: internship.id,
      userId: application.userId,
      status: application.status,
      internship: {
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
      },
      createdAt: application.createdAt,
      updatedAt: application.updatedAt,
    };
};

export default ApplicationResource;
