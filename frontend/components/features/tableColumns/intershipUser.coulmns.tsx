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
import { Checkbox } from "@/components/ui/checkbox";
import { storeApplication } from "@/queries/application.queries";

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

const internshipsIds: string[] = [];

const handleCreateApplication = async () => {
  try {
    const userId = JSON.parse(localStorage.getItem("user") || "").id;
    const status = "Pending";

    for (const internshipId of internshipsIds) {
      await storeApplication({ userId, internshipId, status });
    }

    window.location.reload();
  } catch (err: any) {
    console.error(err);
  }
};

export const userInternShipColumns: ColumnDef<InternShip>[] = [
  {
    id: "select",
    header: "Apply To",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value);
          const intenshipId = row.original.id;
          if (value) {
            internshipsIds.push(intenshipId);
          } else {
            internshipsIds.splice(internshipsIds.indexOf(intenshipId), 1);
          }
        }}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "companyName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
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
      return <Button onClick={handleCreateApplication}>Apply</Button>;
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
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
