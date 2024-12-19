import { IApplicationDocument } from "../models/interfaces/application.interface";
import { IInternshipDocument } from "../models/interfaces/internship.interface";
import ApplicationRepository from "../repositories/application.repository";
import InternshipRepository from "../repositories/internship.repository";
import UserResource from "./user.resource";

const ApplicationResource = async (id: string, user: any) => {
  const application: IApplicationDocument = (await ApplicationRepository.show(
    id,
  )) as IApplicationDocument;

  const internship: IInternshipDocument = (await InternshipRepository.show(
    application.internshipId,
  )) as IInternshipDocument;

  if (application.userId === user.id && application.userId === user.id)
    return {
      id: application.id,
      internshipId: internship.id,
      userId: application.userId,
      userName: user.name,
      email: user.email,
      status: application.status,
      companyName: internship.companyName,
      internShipUserId: internship.userId,
      address: internship.address,
      description: internship.description,
      workingHours: internship.workingHours,
      salary: internship.salary,
      currency: internship.currency,
      paymentTime: internship.paymentTime,
      startDate: internship.startDate,
      endDate: internship.endDate,
      createdAt: application.createdAt,
      updatedAt: application.updatedAt,
    };
  else if (
    application.internshipId === internship.id &&
    internship.userId === user.id
  ) {
    const applicant = await UserResource(application.userId);
    return {
      id: application.id,
      internshipId: internship.id,
      userId: application.userId,
      userName: applicant.username,
      email: applicant.email,
      status: application.status,
      companyName: internship.companyName,
      internShipUserId: internship.userId,
      address: internship.address,
      description: internship.description,
      workingHours: internship.workingHours,
      salary: internship.salary,
      currency: internship.currency,
      paymentTime: internship.paymentTime,
      startDate: internship.startDate,
      endDate: internship.endDate,
      createdAt: application.createdAt,
      updatedAt: application.updatedAt,
    };
  }
};

export default ApplicationResource;
