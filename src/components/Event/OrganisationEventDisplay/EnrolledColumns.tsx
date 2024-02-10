"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

import { VolunteerEnrollment } from "../EnrollmentAcceptedList"
 
export const EnrolledColumns: ColumnDef<VolunteerEnrollment>[] = [
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