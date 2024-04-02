import { PrismaClient } from '@prisma/client';
import { CafeData } from '../../model';

const prisma = new PrismaClient();

export const updateCafe = async (obj: CafeData) => {
  try {
    // Validate obj here if needed

    const update = await prisma.cafe.update({
      where: {
        Name: obj.Name,
      },
      data: {
        Location: obj.Location,
        PriceRange: obj.PriceRange,
        PhoneNumber: obj.PhoneNumber,
        GoogleMapLink: obj.GoogleMapLink,
        OpeningHours: obj.OpeningHours,
        Website: obj.Website,
      },
    });

    return update;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error updating cafe:', error);
    throw new Error('Could not update cafe. Please try again later.'); // Or handle the error in a different way
  }
};
