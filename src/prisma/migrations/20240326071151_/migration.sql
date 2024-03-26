/*
  Warnings:

  - A unique constraint covering the columns `[Accommodation]` on the table `Accommodations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[AmbienceType]` on the table `Ambiance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[MealType]` on the table `MealTypes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Accommodations_Accommodation_key" ON "Accommodations"("Accommodation");

-- CreateIndex
CREATE UNIQUE INDEX "Ambiance_AmbienceType_key" ON "Ambiance"("AmbienceType");

-- CreateIndex
CREATE UNIQUE INDEX "MealTypes_MealType_key" ON "MealTypes"("MealType");
