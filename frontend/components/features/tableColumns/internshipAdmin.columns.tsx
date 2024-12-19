import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ViewDialog } from "@/components/features/internships/admin/viewDialog";
import { EditDialog } from "@/components/features/internships/admin/editDialog";
import { AddDialog } from "@/components/features/internships/admin/addDialog";
import { deleteInternship } from "@/queries/internship.queries";

export type InternShip = {
  id: string;
  companyName: string;
  address: string;
  description: string;
  workingHours: number;
  salary: number;
  currency: string;
  paymentTime: string;
  startDate: string;
  endDate: string;
};

const handleDeleteInternship = async (id: string) => {
  try {
    await deleteInternship(id);
    window.location.reload();
  } catch (err: any) {
    console.error(err);
  }
};

export const internShipColumns: ColumnDef<InternShip>[] = [
  {
    accessorKey: "workingHours",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Working Hours
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "salary",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Salary
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "paymentTime",
    header: "Payments",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    id: "actions",
    header: () => {
      return <AddDialog />;
    },
    cell: ({ row }) => {
      const internship = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="justify-center"
              onSelect={(e) => e.preventDefault()}
            >
              <ViewDialog internship={internship} />
            </DropdownMenuItem>
            <DropdownMenuItem
              className="justify-center"
              onSelect={(e) => e.preventDefault()}
            >
              <EditDialog internship={internship} />
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-500 flex justify-center"
              onClick={() => handleDeleteInternship(internship.id)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
