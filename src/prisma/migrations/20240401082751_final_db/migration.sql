/*
  Warnings:

  - Added the required column `OpeningHours` to the `Cafe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PhoneNumber` to the `Cafe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Website` to the `Cafe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cafe" ADD COLUMN     "OpeningHours" TEXT NOT NULL,
ADD COLUMN     "PhoneNumber" TEXT NOT NULL,
ADD COLUMN     "Website" TEXT NOT NULL;
