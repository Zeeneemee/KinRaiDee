-- CreateTable
CREATE TABLE "User" (
    "UserId" SERIAL NOT NULL,
    "UserName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "LineId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "RestaurantId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "CuisneType" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "PriceRange" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("RestaurantId")
);

-- CreateTable
CREATE TABLE "Ambiance" (
    "AmbienceId" SERIAL NOT NULL,
    "AmbienceType" TEXT NOT NULL,

    CONSTRAINT "Ambiance_pkey" PRIMARY KEY ("AmbienceId")
);

-- CreateTable
CREATE TABLE "MealTypes" (
    "MealTypesId" SERIAL NOT NULL,
    "MealType" TEXT NOT NULL,

    CONSTRAINT "MealTypes_pkey" PRIMARY KEY ("MealTypesId")
);

-- CreateTable
CREATE TABLE "Accommodations" (
    "AccommodationsId" SERIAL NOT NULL,
    "Accommodation" TEXT NOT NULL,

    CONSTRAINT "Accommodations_pkey" PRIMARY KEY ("AccommodationsId")
);

-- CreateTable
CREATE TABLE "RestaurantAmbience" (
    "RestaurantId" INTEGER NOT NULL,
    "AmbienceId" INTEGER NOT NULL,

    CONSTRAINT "RestaurantAmbience_pkey" PRIMARY KEY ("RestaurantId","AmbienceId")
);

-- CreateTable
CREATE TABLE "RestaurantMealTypes" (
    "RestaurantId" INTEGER NOT NULL,
    "MealTypesId" INTEGER NOT NULL,

    CONSTRAINT "RestaurantMealTypes_pkey" PRIMARY KEY ("RestaurantId","MealTypesId")
);

-- CreateTable
CREATE TABLE "RestaurantAccommodations" (
    "RestaurantId" INTEGER NOT NULL,
    "AccommodationsId" INTEGER NOT NULL,

    CONSTRAINT "RestaurantAccommodations_pkey" PRIMARY KEY ("RestaurantId","AccommodationsId")
);

-- CreateTable
CREATE TABLE "UserPreference" (
    "UserPreferenceId" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "RestaurantId" INTEGER NOT NULL,
    "UserPreferenceType" TEXT NOT NULL,
    "UserPreferenceValue" TEXT NOT NULL,

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("UserPreferenceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_UserId_key" ON "User"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_RestaurantId_key" ON "Restaurant"("RestaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "Ambiance_AmbienceId_key" ON "Ambiance"("AmbienceId");

-- CreateIndex
CREATE UNIQUE INDEX "MealTypes_MealTypesId_key" ON "MealTypes"("MealTypesId");

-- CreateIndex
CREATE UNIQUE INDEX "Accommodations_AccommodationsId_key" ON "Accommodations"("AccommodationsId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_UserPreferenceId_key" ON "UserPreference"("UserPreferenceId");

-- AddForeignKey
ALTER TABLE "RestaurantAmbience" ADD CONSTRAINT "RestaurantAmbience_AmbienceId_fkey" FOREIGN KEY ("AmbienceId") REFERENCES "Ambiance"("AmbienceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantAmbience" ADD CONSTRAINT "RestaurantAmbience_RestaurantId_fkey" FOREIGN KEY ("RestaurantId") REFERENCES "Restaurant"("RestaurantId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantMealTypes" ADD CONSTRAINT "RestaurantMealTypes_MealTypesId_fkey" FOREIGN KEY ("MealTypesId") REFERENCES "MealTypes"("MealTypesId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantMealTypes" ADD CONSTRAINT "RestaurantMealTypes_RestaurantId_fkey" FOREIGN KEY ("RestaurantId") REFERENCES "Restaurant"("RestaurantId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantAccommodations" ADD CONSTRAINT "RestaurantAccommodations_RestaurantId_fkey" FOREIGN KEY ("RestaurantId") REFERENCES "Restaurant"("RestaurantId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantAccommodations" ADD CONSTRAINT "RestaurantAccommodations_AccommodationsId_fkey" FOREIGN KEY ("AccommodationsId") REFERENCES "Accommodations"("AccommodationsId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;
