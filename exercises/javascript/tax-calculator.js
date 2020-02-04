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

const DIESEL_TAXES = [
  TaxBand(1, 50, 25),
  TaxBand(51, 75, 105),
  TaxBand(76, 90, 125),
  TaxBand(91, 100, 145),
  TaxBand(101, 110, 165),
  TaxBand(111, 130, 205),
  TaxBand(131, 150, 515),
  TaxBand(151, 170, 830),
  TaxBand(171, 190, 1240),
  TaxBand(191, 225, 1760),
  TaxBand(226, 255, 2070),
  TaxBand(256, Infinity, 2070),
]

const ELECTRIC_TAXES = [
  TaxBand(0, Infinity, 0)
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

  calculateTax(vehicle, toggle) {
    let tax = 0;
    let em = vehicle.co2Emissions;
    if (toggle == undefined){
      toggle = {cheap: false, expensive: false}
    }
    

    if (vehicle.fuelType === "Petrol"){
      if (toggle.cheap == true && vehicle.dateOfFirstRegistration.getFullYear() < this.getYear()){
        
        return 140;
      } else if (toggle.expensive == true && vehicle.dateOfFirstRegistration.getFullYear() < this.getYear()) {
        return 450
      } else { 
        for (let taxRate of PETROL_TAXES) {
          if  (em  >= taxRate.min && em <= taxRate.max){
            tax = taxRate.tax;
            break;
          }
        }
      } 
    } 
    
    if (vehicle.fuelType === "Diesel"){ 
      for (let taxRate of DIESEL_TAXES) {
        if  (em  >= taxRate.min && em <= taxRate.max){
           tax = taxRate.tax;
           break;
        }
      } 
      // need a new else if here for electric cars 

     } 
     
     if(vehicle.fuelType === 'Alternative fuel') { 
        if(toggle.expensive == true && vehicle.dateOfFirstRegistration.getFullYear() < this.getYear()) {
          return 440        
        } else if (toggle.cheap == true && vehicle.dateOfFirstRegistration.getFullYear() < this.getYear()){
        
          return 130;
        }
          for (let taxRate of ALTERNATIVE_FUELS) {
          if (em  >= taxRate.min && em <= taxRate.max){
            tax = taxRate.tax;
            break;
            }
         }
      }

      if(vehicle.fuelType === 'Electric') {
        if(toggle.expensive == true && vehicle.dateOfFirstRegistration.getFullYear() < this.getYear()) {
          return 310
        }
      }

    return tax;
    }
  }


module.exports = { TaxCalculator: TaxCalculator };
