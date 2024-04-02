import pandas as pd
import numpy as np
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split

accomodations = {1:'Parking', 2:'Wifi',3:'vegan', 4:'work-friendly', 5: 'pet-friendly', 6: 'outdoor' }
mealtypes = {1:'coffee',2:'bakery',3:'cake',4:'ice-cream',5:'brunch',6:'one-dish-meal'}
ambiences = {1:'Cozy', 2:'Romantic',3:'Hommy',4:'Nature',5:'Minimal',6:'Rustic',7:'Modern',8:'Vintage',9:'Elegant',10:'Luxury',11:'Loft',12:'Loft Vintage',13:'Cartoon',14:"English",15:'Classic'}

data = {
    "CafeId": [1],
    "Name": ["CRAFT"],
    "location": ["โรงแรม Kimpton Maa-Lai กรุงเทพฯ, 78 ซอยต้นสน แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ"],
    "googleMapLink": ["https://goo.gl/maps/wPy5wbroCqdDZsjF7"],
    "priceRange": ["150 - 500 บาท"],
    "phoneNumber": ["020569999"],
    "openingHours": ["07.00 - 24.00 น."],
    "website": [None],
    "ambience": [""],
    "mealType": [""],
    "accommodations": [[1, 2]]
}

def convertAccomodation(df, accomodations):
    for acc_name in accomodations.values():
        df[acc_name] = 0
    for index,row in df.iterrows():
        acc_ids = row['accommodations']
        for acc_id in acc_ids:
            acc_name = accomodations.get(acc_id)
            if acc_name:
                df.at[index, acc_name] = 1
    df.drop(columns=['accommodations'], inplace=True)
    return df


df = pd.DataFrame(data)
cafe = convertAccomodation(df, accomodations)
print(cafe[["Name","Parking"]])



