/*
  Warnings:

  - A unique constraint covering the columns `[Name]` on the table `Cafe` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cafe_Name_key" ON "Cafe"("Name");
