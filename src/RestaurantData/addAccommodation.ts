import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();



export const checkAccommodation = async () => {
    const accommodations : string[] = ['Parking', 'Wifi','vegan', 'work-friendly', 'pet-friendly', 'outdoor' ]
    for (const accommodation of accommodations){
        const acc = await prisma.accommodations.findUnique({
            where: { Accommodation: accommodation },
        });
        if (!acc){
            await prisma.accommodations.create({
                data: { Accommodation : accommodation },
            });
        }
    }
}

export const addAccommodationToCafe = async (CafeId:number,Accommodation:string[])=>{
    for (const accommodation of Accommodation){
        const acc = await prisma.accommodations.findUnique({
            where: { Accommodation: accommodation },
        }
        )
        console.log(acc);
        if (acc){
            await prisma.cafeAccommodations.create({
                data:{
                    CafeId: CafeId,
                    AccommodationsId: acc.AccommodationsId,
                }
            })
        }
    }
}

module.exports = addAccommodationToCafe,checkAccommodation