import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function fetchCafeData() {
    const cafes = await prisma.cafe.findMany({
      include: {
        Ambiance: true,
        MealTypes: true,
        Accommodations: true,
      }
    });
    return (
    cafes.map(cafe => ({ name: cafe.Name,
        location: cafe.Location,
        googleMapLink: cafe.GoogleMapLink,
        priceRange: cafe.PriceRange,
        phoneNumber: cafe.PhoneNumber,
        openingHours: cafe.OpeningHours,
        website: cafe.Website,
        ambience: cafe.Ambiance.map(a => a.AmbienceId).join(", "),
        mealType: cafe.MealTypes.map(m => m.MealTypesId).join(", "),
        accommodations: cafe.Accommodations.map(ac => ac.AccommodationsId).join(", ")
      
    }
    )
    ))}
     
 

fetchCafeData().then(console.log).catch(console.error);
  