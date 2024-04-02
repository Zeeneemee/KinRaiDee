import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const checkMealType = async () => {
    // List of meal types
    const mealTypes = ['coffee','bakery','cake','ice-cream','brunch','one-dish-meal'];
    for (const mealType of mealTypes) {
        const meal = await prisma.mealTypes.findUnique({
            where: { MealType: mealType },
        });

        if (!meal) {
            await prisma.mealTypes.create({
                data: { MealType: mealType },
            });
        }
    }
}
export const addMealTypeToCafe = async (CafeId:number, mealTypes:string[]) => {
    for (const mealType of mealTypes) {
        const meal = await prisma.mealTypes.findUnique({
            where: { MealType: mealType },
        });
        console.log(meal);
        if (meal) {
            await prisma.cafeMealTypes.create({
                data: {
                    CafeId: CafeId,
                    MealTypesId: meal.MealTypesId,
                },
            });
        }
    }
}

