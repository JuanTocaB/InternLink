"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Application } from "@/components/features/tableColumns/applicationAdmin.columns";
import { getApplication } from "@/queries/application.queries";

interface EditDialogProps {
  application: Application;
}

export function ViewDialog({ application }: EditDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Application>(application);

  const handleOpenChange = (open: boolean) => {
    getApplication(application.id).then((data) => setFormData(data.data.data));
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Edit Internship</DialogTitle>
          <DialogDescription>
            View application to theinternship at {formData.companyName}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="companyName" className="text-right">
              User Name
            </Label>
            <span className="col-span-3">{formData.userName}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="companyName" className="text-right">
              Email
            </Label>
            <span className="col-span-3">{formData.email}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="companyName" className="text-right">
              Status
            </Label>
            <span className="col-span-3">{formData.status}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <span className="col-span-3">{formData.address}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="workingHours" className="text-right">
              Working Hours
            </Label>
            <span className="col-span-3">{formData.workingHours}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="salary" className="text-right">
              Salary
            </Label>
            <span className="col-span-3">
              {formData.salary} {formData.currency}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="paymentTime" className="text-right">
              Payments
            </Label>
            <span className="col-span-3">{formData.paymentTime}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="startDate" className="text-right">
              Start Date
            </Label>
            <span className="col-span-3">{formData.startDate}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              End Date
            </Label>
            <span className="col-span-3">{formData.endDate}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <span className="col-span-3">{formData.description}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
