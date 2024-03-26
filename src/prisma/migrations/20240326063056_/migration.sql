/*
  Warnings:

  - The primary key for the `CuisineType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CuisineID` on the `CuisineType` table. All the data in the column will be lost.
  - Added the required column `CuisineId` to the `CuisineType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RestaurantCuisine" DROP CONSTRAINT "RestaurantCuisine_CuisineId_fkey";

-- AlterTable
ALTER TABLE "CuisineType" DROP CONSTRAINT "CuisineType_pkey",
DROP COLUMN "CuisineID",
ADD COLUMN     "CuisineId" INTEGER NOT NULL,
ADD CONSTRAINT "CuisineType_pkey" PRIMARY KEY ("CuisineId");

-- AddForeignKey
ALTER TABLE "RestaurantCuisine" ADD CONSTRAINT "RestaurantCuisine_CuisineId_fkey" FOREIGN KEY ("CuisineId") REFERENCES "CuisineType"("CuisineId") ON DELETE RESTRICT ON UPDATE CASCADE;
