/*
  Warnings:

  - You are about to drop the `CuisineType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestaurantCuisine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RestaurantCuisine" DROP CONSTRAINT "RestaurantCuisine_CuisineId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantCuisine" DROP CONSTRAINT "RestaurantCuisine_RestaurantId_fkey";

-- DropTable
DROP TABLE "CuisineType";

-- DropTable
DROP TABLE "RestaurantCuisine";
