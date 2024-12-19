import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { storeInternship } from "@/queries/internship.queries";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

export function AddDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState(Number);
  const [currency, setCurrency] = useState("");
  const [paymentTime, setPaymentTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [workingHours, setWorkingHours] = useState(Number);
  const router = useRouter();

  const handleAddInternship = async () => {
    try {
      const userJson = JSON.parse(localStorage.getItem("user") as string);
      const userId = userJson.id;
      const data = {
        companyName: companyName,
        userId: userId,
        address: address,
        description: description,
        workingHours: workingHours,
        salary: salary,
        currency: currency,
        paymentTime: paymentTime,
        startDate: startDate,
        endDate: endDate,
      };
      await storeInternship(data);
      setIsDialogOpen(false);
      window.location.reload();
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add Internship</DialogTitle>
          <DialogDescription>
            Add a new internship to the list of internships
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Company Name
            </Label>
            <Input
              id="companyName"
              className="col-span-3"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              className="col-span-3"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="workingHours" className="text-right">
              Working Hours
            </Label>
            <Input
              id="workingHours"
              className="col-span-3"
              type="number"
              onChange={(e) => setWorkingHours(Number(e.target.value))}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="salary" className="text-right">
              Salary
            </Label>
            <Input
              id="salary"
              className="col-span-3"
              type="number"
              onChange={(e) => setSalary(Number(e.target.value))}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="currency" className="text-right">
              Currency
            </Label>
            <Input
              id="currency"
              className="col-span-3"
              type="text"
              onChange={(e) => setCurrency(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="paymentTime" className="text-right">
              Payments
            </Label>
            <Input
              id="paymentTime"
              className="col-span-3"
              onChange={(e) => setPaymentTime(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="startDate" className="text-right">
              Start Date
            </Label>
            <Input
              id="startDate"
              className="col-span-3"
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              End Date
            </Label>
            <Input
              id="endDate"
              className="col-span-3"
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              className="col-span-3"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddInternship}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
