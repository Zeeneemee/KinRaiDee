import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// pseudo-code/JavaScript with Prisma
async function ensureAmbiancesExist() {
  const ambiances = ['Cozy', 'Romantic'];
  for (const ambianceType of ambiances) {
      const ambiance = await prisma.ambience.findUnique({
          where: { AmbienceType: ambianceType },
      });

      if (!ambiance) {
          await prisma.ambience.create({
              data: { AmbienceType: ambianceType },
          });
      }
  }
}

async function createRestaurant() {
  const restaurant = await prisma.cafe.create({
      data: {
          Name: "Gourmet Paradise",
          CuisneType: "Multi-Cuisine", // Note the typo in your schema; consider correcting it to "CuisineType"
          Location: "123 Culinary Street",
          PriceRange: "$$$",
      },
  });
  return restaurant;
}
async function addAmbianceToRestaurant(cafeId:number, ambiances:string[]) {
    for (const ambianceType of ambiances) {
        const ambiance = await prisma.ambience.findUnique({
            where: { AmbienceType: ambianceType },
        });
        console.log(ambiance);
        if (ambiance) {
            await prisma.cafeAmbience.create({
                data: {
                    CafeId: cafeId,
                    AmbienceId: ambiance.AmbienceId,
                },
            });
        }
    }
}

// Example usage
module.exports = ensureAmbiancesExist,addAmbianceToRestaurant,createRestaurant