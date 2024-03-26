# KinRaiDee
**Food recommendation line integrated web app**

server.ts
App Routing

app.post('/userPref')

**Restaurant**
- RestaurantId Int @id@default(autoIncrement())
- Name String
- Location String
- PriceRange String
- Opening String
- Cuisine String
- Ambience RestaurantAmbience[]
- Meal RestaurantMeal[]


**addRestaurant**:
**- Add Restaurant
- Add Ambience (Cozy, Tech, Light, Dark)
- Add Meal(brunch, coffee, Cake)
- Add Accommodation (Parking, Wifi, Discount/Promotion)


