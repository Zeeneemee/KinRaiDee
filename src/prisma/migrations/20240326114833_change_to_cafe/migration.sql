/*
  Warnings:

  - You are about to drop the column `RestaurantId` on the `UserPreference` table. All the data in the column will be lost.
  - You are about to drop the `Ambiance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Restaurant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestaurantAccommodations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestaurantAmbience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestaurantMealTypes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `CafeId` to the `UserPreference` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RestaurantAccommodations" DROP CONSTRAINT "RestaurantAccommodations_AccommodationsId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantAccommodations" DROP CONSTRAINT "RestaurantAccommodations_RestaurantId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantAmbience" DROP CONSTRAINT "RestaurantAmbience_AmbienceId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantAmbience" DROP CONSTRAINT "RestaurantAmbience_RestaurantId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantMealTypes" DROP CONSTRAINT "RestaurantMealTypes_MealTypesId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantMealTypes" DROP CONSTRAINT "RestaurantMealTypes_RestaurantId_fkey";

-- AlterTable
ALTER TABLE "UserPreference" DROP COLUMN "RestaurantId",
ADD COLUMN     "CafeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Ambiance";

-- DropTable
DROP TABLE "Restaurant";

-- DropTable
DROP TABLE "RestaurantAccommodations";

-- DropTable
DROP TABLE "RestaurantAmbience";

-- DropTable
DROP TABLE "RestaurantMealTypes";

-- CreateTable
CREATE TABLE "Cafe" (
    "CafeId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "CuisneType" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "PriceRange" TEXT NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("CafeId")
);

-- CreateTable
CREATE TABLE "Ambience" (
    "AmbienceId" SERIAL NOT NULL,
    "AmbienceType" TEXT NOT NULL,

    CONSTRAINT "Ambience_pkey" PRIMARY KEY ("AmbienceId")
);

-- CreateTable
CREATE TABLE "CafeAmbience" (
    "CafeId" INTEGER NOT NULL,
    "AmbienceId" INTEGER NOT NULL,

    CONSTRAINT "CafeAmbience_pkey" PRIMARY KEY ("CafeId","AmbienceId")
);

-- CreateTable
CREATE TABLE "CafeMealTypes" (
    "CafeId" INTEGER NOT NULL,
    "MealTypesId" INTEGER NOT NULL,

    CONSTRAINT "CafeMealTypes_pkey" PRIMARY KEY ("CafeId","MealTypesId")
);

-- CreateTable
CREATE TABLE "CafeAccommodations" (
    "CafeId" INTEGER NOT NULL,
    "AccommodationsId" INTEGER NOT NULL,

    CONSTRAINT "CafeAccommodations_pkey" PRIMARY KEY ("CafeId","AccommodationsId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cafe_CafeId_key" ON "Cafe"("CafeId");

-- CreateIndex
CREATE UNIQUE INDEX "Ambience_AmbienceType_key" ON "Ambience"("AmbienceType");

-- AddForeignKey
ALTER TABLE "CafeAmbience" ADD CONSTRAINT "CafeAmbience_AmbienceId_fkey" FOREIGN KEY ("AmbienceId") REFERENCES "Ambience"("AmbienceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CafeAmbience" ADD CONSTRAINT "CafeAmbience_CafeId_fkey" FOREIGN KEY ("CafeId") REFERENCES "Cafe"("CafeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CafeMealTypes" ADD CONSTRAINT "CafeMealTypes_MealTypesId_fkey" FOREIGN KEY ("MealTypesId") REFERENCES "MealTypes"("MealTypesId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CafeMealTypes" ADD CONSTRAINT "CafeMealTypes_CafeId_fkey" FOREIGN KEY ("CafeId") REFERENCES "Cafe"("CafeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CafeAccommodations" ADD CONSTRAINT "CafeAccommodations_CafeId_fkey" FOREIGN KEY ("CafeId") REFERENCES "Cafe"("CafeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CafeAccommodations" ADD CONSTRAINT "CafeAccommodations_AccommodationsId_fkey" FOREIGN KEY ("AccommodationsId") REFERENCES "Accommodations"("AccommodationsId") ON DELETE RESTRICT ON UPDATE CASCADE;
