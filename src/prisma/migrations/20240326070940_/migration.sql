-- AlterTable
CREATE SEQUENCE accommodations_accommodationsid_seq;
ALTER TABLE "Accommodations" ALTER COLUMN "AccommodationsId" SET DEFAULT nextval('accommodations_accommodationsid_seq');
ALTER SEQUENCE accommodations_accommodationsid_seq OWNED BY "Accommodations"."AccommodationsId";

-- AlterTable
CREATE SEQUENCE ambiance_ambienceid_seq;
ALTER TABLE "Ambiance" ALTER COLUMN "AmbienceId" SET DEFAULT nextval('ambiance_ambienceid_seq');
ALTER SEQUENCE ambiance_ambienceid_seq OWNED BY "Ambiance"."AmbienceId";

-- AlterTable
CREATE SEQUENCE mealtypes_mealtypesid_seq;
ALTER TABLE "MealTypes" ALTER COLUMN "MealTypesId" SET DEFAULT nextval('mealtypes_mealtypesid_seq');
ALTER SEQUENCE mealtypes_mealtypesid_seq OWNED BY "MealTypes"."MealTypesId";
