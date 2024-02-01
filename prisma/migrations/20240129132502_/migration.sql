-- CreateEnum
CREATE TYPE "EnrollmentStatus" AS ENUM ('PENDING', 'ASSIGNED', 'COMPLETED');

-- CreateTable
CREATE TABLE "tb_volunteer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "mobileNumber" INTEGER NOT NULL,

    CONSTRAINT "tb_volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_organisation" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "mobileNumber" INTEGER NOT NULL,

    CONSTRAINT "tb_organisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_event" (
    "id" SERIAL NOT NULL,
    "organisationId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "location" TEXT,
    "maxVolunteers" INTEGER NOT NULL,

    CONSTRAINT "tb_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_enrollment" (
    "id" SERIAL NOT NULL,
    "volunteerId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "status" "EnrollmentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "tb_enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_volunteer_email_key" ON "tb_volunteer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_volunteer_email_password_key" ON "tb_volunteer"("email", "password");

-- CreateIndex
CREATE UNIQUE INDEX "tb_organisation_email_key" ON "tb_organisation"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_organisation_email_password_key" ON "tb_organisation"("email", "password");

-- AddForeignKey
ALTER TABLE "tb_event" ADD CONSTRAINT "tb_event_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "tb_organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_enrollment" ADD CONSTRAINT "tb_enrollment_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "tb_volunteer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_enrollment" ADD CONSTRAINT "tb_enrollment_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "tb_event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
