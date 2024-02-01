/*
  Warnings:

  - You are about to drop the `tb_enrollment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_organisation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_volunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Availability" AS ENUM ('WEEKDAYS', 'WEEKEND', 'ANY');

-- AlterEnum
ALTER TYPE "EnrollmentStatus" ADD VALUE 'REJECTED';

-- DropForeignKey
ALTER TABLE "tb_enrollment" DROP CONSTRAINT "tb_enrollment_eventId_fkey";

-- DropForeignKey
ALTER TABLE "tb_enrollment" DROP CONSTRAINT "tb_enrollment_volunteerId_fkey";

-- DropForeignKey
ALTER TABLE "tb_event" DROP CONSTRAINT "tb_event_organisationId_fkey";

-- DropTable
DROP TABLE "tb_enrollment";

-- DropTable
DROP TABLE "tb_event";

-- DropTable
DROP TABLE "tb_organisation";

-- DropTable
DROP TABLE "tb_volunteer";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "hashPassword" VARCHAR(100) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteer" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "bday" TIMESTAMP(3) NOT NULL,
    "address" VARCHAR(255),
    "availability" "Availability" NOT NULL,

    CONSTRAINT "volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organisation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "mobileNumber" INTEGER,

    CONSTRAINT "organisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "organisationId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "location" TEXT,
    "maxVolunteers" INTEGER NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enrollment" (
    "id" SERIAL NOT NULL,
    "volunteerId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "status" "EnrollmentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "volunteerId" INTEGER NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InboxNotification" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" VARCHAR(255) NOT NULL,

    CONSTRAINT "InboxNotification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_hashPassword_key" ON "user"("email", "hashPassword");

-- CreateIndex
CREATE UNIQUE INDEX "admin_userId_key" ON "admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "volunteer_userId_key" ON "volunteer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "organisation_userId_key" ON "organisation"("userId");

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer" ADD CONSTRAINT "volunteer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation" ADD CONSTRAINT "organisation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "volunteer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "volunteer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InboxNotification" ADD CONSTRAINT "InboxNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
