"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

import { VolunteerEnrollment } from "../EnrollmentAcceptedList"
 
export const PendingColumns: ColumnDef<VolunteerEnrollment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
            checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
  },
  {
    accessorKey: "enroll_status",
    header: "Status",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "mobileNumber",
    header: "Mobile Number",
  },
  {
    accessorKey: "availability",
    header: "Availability",
  }
]