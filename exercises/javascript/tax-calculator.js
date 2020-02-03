function TaxBand (min, max, tax){
  return {min: min, max: max, tax: tax};
}

const PETROL_TAXES = [
  TaxBand(1, 50, 10),
  TaxBand(51, 75, 25),
  TaxBand(76, 90, 105),
  TaxBand(91, 100, 125),
  TaxBand(101, 110, 145),
  TaxBand(111, 130, 165),
  TaxBand(131, 150, 205),
  TaxBand(151, 170, 515),
  TaxBand(171, 190, 830),
  TaxBand(191, 225, 1240),
  TaxBand(226, 255, 1760),
  TaxBand(256, Infinity, 2070),
]

const ALTERNATIVE_FUELS = [
  TaxBand(0, 50, 0),
  TaxBand(51, 75, 15),
  TaxBand(76, 90, 95),
  TaxBand(91, 100, 115),
  TaxBand(100, 110, 135),
  TaxBand(111, 130, 155),
  TaxBand(131, 150, 195),
  TaxBand(151, 170, 505), 
  TaxBand(171, 190, 820),
  TaxBand(191, 225, 1230),
  TaxBand(226, 255, 1750),
  TaxBand(256, Infinity, 2060),
]

let TaxCalculator = class TaxCalculator {
  constructor(year) {
    if (year === undefined) {
      let date = new Date();
      this.year = date.getFullYear();
    } else {
      this.year = year;
    }
  }

  getYear() {
    return this.year;
  }

  calculateTax(vehicle) {
    let tax = 0;
    let em = vehicle.co2Emissions;
    if(vehicle.fuelType === 'Petrol') {
      for (let taxRate of PETROL_TAXES) {
        if (em  >= taxRate.min && em <= taxRate.max){
          tax = taxRate.tax;
          break;
          }
       }
      } else if(vehicle.fuelType === 'Alternative fuel') {
        for (let taxRate of ALTERNATIVE_FUELS) {
          if (em  >= taxRate.min && em <= taxRate.max){
            tax = taxRate.tax;
            break;
            }
         }
      }
    return tax;
  }
}

module.exports = { TaxCalculator: TaxCalculator };
