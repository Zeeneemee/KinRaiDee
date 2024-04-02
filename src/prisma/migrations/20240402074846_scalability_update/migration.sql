/*
  Warnings:

  - You are about to drop the column `CafeId` on the `UserPreference` table. All the data in the column will be lost.
  - You are about to drop the column `UserPreferenceType` on the `UserPreference` table. All the data in the column will be lost.
  - You are about to drop the column `UserPreferenceValue` on the `UserPreference` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UserPreference_UserPreferenceId_key";

-- AlterTable
ALTER TABLE "UserPreference" DROP COLUMN "CafeId",
DROP COLUMN "UserPreferenceType",
DROP COLUMN "UserPreferenceValue",
ADD COLUMN     "AccommodationsId" INTEGER,
ADD COLUMN     "AmbienceId" INTEGER,
ADD COLUMN     "MealTypesId" INTEGER;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_AmbienceId_fkey" FOREIGN KEY ("AmbienceId") REFERENCES "Ambience"("AmbienceId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_MealTypesId_fkey" FOREIGN KEY ("MealTypesId") REFERENCES "MealTypes"("MealTypesId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_AccommodationsId_fkey" FOREIGN KEY ("AccommodationsId") REFERENCES "Accommodations"("AccommodationsId") ON DELETE SET NULL ON UPDATE CASCADE;
