import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function ensureAmbiancesExist() {
  const ambiances = ['Cozy', 'Romantic','Hommy','Nature','Minimal','Rustic','Modern','Vintage','Elegant','Luxury','Loft','Loft Vintage','Cartoon',"English",'Classic'];
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


export async function addAmbianceToRestaurant(cafeId:number, ambiances:string[]) {
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
