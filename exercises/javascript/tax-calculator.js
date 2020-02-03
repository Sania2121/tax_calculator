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
    
    if(vehicle.co2Emissions >= 1 && vehicle.co2Emissions <= 50) {
      return 10
    } else if(vehicle.co2Emissions >= 51 && vehicle.co2Emissions <= 75) {
      return 25
    } else if(vehicle.co2Emissions >= 76 && vehicle.co2Emissions <= 90) {
      return 105
    } else if(vehicle.co2Emissions >= 91 && vehicle.co2Emissions <= 100) {
      return 125
    } else if(vehicle.co2Emissions >= 101 && vehicle.co2Emissions <= 110) {
      return 145
    } else if(vehicle.co2Emissions >= 111 && vehicle.co2Emissions <= 130) {
      return 165
    } else if(vehicle.co2Emissions >= 131 && vehicle.co2Emissions <= 150) {
      return 205
    } else if(vehicle.co2Emissions >= 151 && vehicle.co2Emissions <= 170) {
      return 515
    } else {
      return 0
    }
  }
}

module.exports = { TaxCalculator: TaxCalculator }

// 171 - 190	£830
// 191 - 225	£1,240
// 226 - 255	£1,760
// Over 255	£2,070