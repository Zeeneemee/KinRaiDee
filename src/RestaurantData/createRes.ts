import { CafeData } from "../../model";
import {  PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function createRestaurant(obj: CafeData) {
    const restaurant = await prisma.cafe.create({
      data: {
        Name: obj.Name,
        Location: obj.Location,
        PriceRange: obj.PriceRange,
        PhoneNumber: obj.PhoneNumber,
        GoogleMapLink: obj.GoogleMapLink, // Updated to use the correct field
        OpeningHours: obj.OpeningHours,
        Website: obj.Website,
      },
    });
    return restaurant;
  }
// Example usage
