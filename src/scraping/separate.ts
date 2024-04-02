import {CafeData } from '../../model';
  export const separateFieldsWithNewline = (text: string): CafeData => {
    const patterns: { [key in keyof CafeData]: RegExp } = {
      Location: /ที่อยู่: (.+?)Google Map:/,
      GoogleMapLink: /Google Map: (.+?)โทร:/,
      PhoneNumber: /โทร: (.+?)เวลาเปิดบริการคาเฟ่:/,
      OpeningHours: /เวลาเปิดบริการคาเฟ่: (.+?)เว็บไซต์:/,
      Website: /เว็บไซต์: (.+?)คาเฟ่สไตล์:/,
      style: /คาเฟ่สไตล์: (.+?)ราคาเฉลี่ยต่อหัว:/,
      PriceRange: /ราคาเฉลี่ยต่อหัว: (.+)/,
    };
  
    let result: CafeData = {};
    for (const [key, pattern] of Object.entries(patterns)) {
      const match = text.match(pattern);
      if (match && match[1]) {
        // Append \n for each match, but the final output will have unnecessary newlines
        // Consider removing \n if you plan to directly use the strings in a UI
        result[key as keyof CafeData] = `${match[1]}\n`;
      }
    }
    return result;
  };
  
  // Example usage
  const other: string = 'ที่อยู่: 16/78 ลาดพร้าว 18 แยก 3 ถนนลาดพร้าว ซอยลาดพร้าว 15 เขตจตุจักร กรุงเทพฯGoogle Map: https://goo.gl/maps/5dDmAVof7rsp32WW7โทร: 0893542999เวลาเปิดบริการคาเฟ่: 10.00 – 18.00 น.เว็บไซต์: https://www.facebook.com/Ri.Cafe.Friends คาเฟ่สไตล์: Cartoon Characterราคาเฉลี่ยต่อหัว: 100 – 200 บาท';
 
  