-- CreateTable
CREATE TABLE "CuisineType" (
    "CuisineID" SERIAL NOT NULL,
    "CuisineType" TEXT NOT NULL,

    CONSTRAINT "CuisineType_pkey" PRIMARY KEY ("CuisineID")
);

-- CreateTable
CREATE TABLE "RestaurantCuisine" (
    "RestaurantId" INTEGER NOT NULL,
    "CuisineId" INTEGER NOT NULL,

    CONSTRAINT "RestaurantCuisine_pkey" PRIMARY KEY ("RestaurantId","CuisineId")
);

-- CreateIndex
CREATE UNIQUE INDEX "CuisineType_CuisineID_key" ON "CuisineType"("CuisineID");

-- AddForeignKey
ALTER TABLE "RestaurantCuisine" ADD CONSTRAINT "RestaurantCuisine_CuisineId_fkey" FOREIGN KEY ("CuisineId") REFERENCES "CuisineType"("CuisineID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantCuisine" ADD CONSTRAINT "RestaurantCuisine_RestaurantId_fkey" FOREIGN KEY ("RestaurantId") REFERENCES "Restaurant"("RestaurantId") ON DELETE RESTRICT ON UPDATE CASCADE;
