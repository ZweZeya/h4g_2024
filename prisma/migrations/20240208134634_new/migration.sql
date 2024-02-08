/*
  Warnings:

  - Added the required column `endDate` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `event` table without a default value. This is not possible if the table is not empty.
  - Made the column `mobileNumber` on table `organisation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "EnrollmentStatus" ADD VALUE 'NONE';

-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_volunteerId_fkey";

-- DropForeignKey
ALTER TABLE "InboxNotification" DROP CONSTRAINT "InboxNotification_userId_fkey";

-- DropForeignKey
ALTER TABLE "admin" DROP CONSTRAINT "admin_userId_fkey";

-- DropForeignKey
ALTER TABLE "enrollment" DROP CONSTRAINT "enrollment_eventId_fkey";

-- DropForeignKey
ALTER TABLE "enrollment" DROP CONSTRAINT "enrollment_volunteerId_fkey";

-- DropForeignKey
ALTER TABLE "event" DROP CONSTRAINT "event_organisationId_fkey";

-- DropForeignKey
ALTER TABLE "organisation" DROP CONSTRAINT "organisation_userId_fkey";

-- DropForeignKey
ALTER TABLE "volunteer" DROP CONSTRAINT "volunteer_userId_fkey";

-- AlterTable
ALTER TABLE "event" ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "organisation" ALTER COLUMN "mobileNumber" SET NOT NULL,
ALTER COLUMN "mobileNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "volunteer" ALTER COLUMN "mobileNumber" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer" ADD CONSTRAINT "volunteer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation" ADD CONSTRAINT "organisation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InboxNotification" ADD CONSTRAINT "InboxNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
