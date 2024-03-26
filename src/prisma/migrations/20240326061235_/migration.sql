-- DropIndex
DROP INDEX "Accommodations_AccommodationsId_key";

-- DropIndex
DROP INDEX "Ambiance_AmbienceId_key";

-- DropIndex
DROP INDEX "CuisineType_CuisineID_key";

-- DropIndex
DROP INDEX "MealTypes_MealTypesId_key";

-- AlterTable
ALTER TABLE "Accommodations" ALTER COLUMN "AccommodationsId" DROP DEFAULT;
DROP SEQUENCE "Accommodations_AccommodationsId_seq";

-- AlterTable
ALTER TABLE "Ambiance" ALTER COLUMN "AmbienceId" DROP DEFAULT;
DROP SEQUENCE "Ambiance_AmbienceId_seq";

-- AlterTable
ALTER TABLE "CuisineType" ALTER COLUMN "CuisineID" DROP DEFAULT;
DROP SEQUENCE "CuisineType_CuisineID_seq";

-- AlterTable
ALTER TABLE "MealTypes" ALTER COLUMN "MealTypesId" DROP DEFAULT;
DROP SEQUENCE "MealTypes_MealTypesId_seq";
