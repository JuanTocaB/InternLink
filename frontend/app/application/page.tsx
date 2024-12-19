"use client";

import Link from "next/link";
import { Book, Check, Home, Package2 } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import AdminSearch from "@/components/features/admin-search";
import { DataTable } from "@/components/ui/data-table";
import UserDropdown from "@/components/ui/user-dropdown";
import { filterUser, User } from "@/lib/filterUser";
import { useState, useEffect } from "react";
import {
  applicationAdminColumns,
  Application,
} from "@/components/features/tableColumns/applicationAdmin.columns";
import { ColumnDef } from "@tanstack/react-table";
import { indexApplications } from "@/queries/application.queries";
import { applicationUserColumns } from "@/components/features/tableColumns/applicationUser.columns";

export default function Dashboard() {
  const [tableData, setTableData] = useState<any[]>([]);
  const [columns, setColumns] = useState<ColumnDef<Application>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    indexApplications().then((response) => {
      setTableData(response.data.data);
      const user = JSON.parse(localStorage.getItem("user") || "");
      if (user.roles[0].name === "Administrator") {
        setColumns(applicationAdminColumns);
      } else if (user.roles[0].name === "User") {
        setColumns(applicationUserColumns);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="">InternLink</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                href="/"
              >
                <Book className="h-4 w-4" />
                Internships
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                href="/application"
              >
                <Check className="h-4 w-4" />
                Applications
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1"></div>
          <ModeToggle />
          <UserDropdown />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <p>Loading...</p>
            </div>
          ) : (
            <DataTable columns={columns} data={tableData} />
          )}
        </main>
      </div>
    </div>
  );
}
