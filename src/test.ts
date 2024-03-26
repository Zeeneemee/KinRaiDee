import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// pseudo-code/JavaScript with Prisma
async function ensureAmbiancesExist() {
  const ambiances = ['Cozy', 'Romantic'];
  for (const ambianceType of ambiances) {
      const ambiance = await prisma.ambiance.findUnique({
          where: { AmbienceType: ambianceType },
      });

      if (!ambiance) {
          await prisma.ambiance.create({
              data: { AmbienceType: ambianceType },
          });
      }
  }
}

async function createRestaurant() {
  const restaurant = await prisma.restaurant.create({
      data: {
          Name: "Gourmet Paradise",
          CuisneType: "Multi-Cuisine", // Note the typo in your schema; consider correcting it to "CuisineType"
          Location: "123 Culinary Street",
          PriceRange: "$$$",
      },
  });
  return restaurant;
}
async function addAmbianceToRestaurant(restaurantId:number, ambiances:string[]) {
    for (const ambianceType of ambiances) {
        const ambiance = await prisma.ambiance.findUnique({
            where: { AmbienceType: ambianceType },
        });
        console.log(ambiance);
        if (ambiance) {
            await prisma.restaurantAmbience.create({
                data: {
                    RestaurantId: restaurantId,
                    AmbienceId: ambiance.AmbienceId,
                },
            });
        }
    }
}

// Example usage
async function main() {
    await ensureAmbiancesExist();
    const restaurant = await createRestaurant();
    await addAmbianceToRestaurant(restaurant.RestaurantId, ['Cozy', 'Romantic']);
}

main()
    .catch((e) => {
        throw e;
    })
    .then(async () => {
        await prisma.$disconnect();
    });
