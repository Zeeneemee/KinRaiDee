import {ensureAmbiancesExist,addAmbianceToRestaurant} from './addAmbience';
import { addMealTypeToCafe,checkMealType} from './addMealType';
import {addAccommodationToCafe, checkAccommodation} from './addAccommodation';
import { createRestaurant } from './createRes';
import { drivehub } from '../scraping/drivehub';
const main = async () => {
    createRestaurant({
        Name: 'Beaker and Bitter',
        Location: '4 ซอยสายลม 1 แขวงสามเสนใน เขตพญาไท กรุงเทพฯ \n',
        GoogleMapLink: 'https://goo.gl/maps/2nyYd5ce6f9RQgvL8เบอร์\n',
        PhoneNumber: '0829896946\n',
        OpeningHours: '08.00 – 20.00 น. \n',
        PriceRange: '100 – 250 บาท\n'
      },)

}

main()