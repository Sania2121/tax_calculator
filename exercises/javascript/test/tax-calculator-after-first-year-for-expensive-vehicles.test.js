const { TaxCalculator } = require('../tax-calculator');
const { Vehicle } = require('../vehicle');
const { FuelType } = require('../fuel-type');

describe.skip('Tax calculator on expensive vehicles over 40K after the first year', () => {
  let taxCalculator = new TaxCalculator();
  let FIRST_OF_APRIL_2017 = new Date(2017, 4, 1);

  it('subsequent years tax for petrol vehicles over 40K', () => {
    const vehicle = new Vehicle(206, FuelType.PETROL, FIRST_OF_APRIL_2017, 50000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(450);
  })

  it('subsequent years tax for electric vehicles over 40K', () => {
    const vehicle = new Vehicle(206, FuelType.ELECTRIC, FIRST_OF_APRIL_2017, 50000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(310);
  })

  it('subsequent years tax for alternative fuel vehicles over 40K', () => {
    const vehicle = new Vehicle(206, FuelType.ALTERNATIVE_FUEL, FIRST_OF_APRIL_2017, 50000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(440);
  })
})
