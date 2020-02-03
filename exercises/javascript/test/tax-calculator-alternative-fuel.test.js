const { TaxCalculator } = require('../tax-calculator');
const { Vehicle } = require('../vehicle');
const { FuelType } = require('../fuel-type');

describe('Tax calculator on an alternative fuel vehicle for the first year', () => {
  let taxCalculator = new TaxCalculator();;
  let FIRST_OF_JAN_2020 = new Date(2020, 1, 1);

  it('should return zero for zero grams of CO2 emissions', () => {
    const vehicle = new Vehicle(0, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(0);
  })

  it('should return zero for up to 50 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(50, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(0);
  })

  it('should return 15 for up to 75 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(75, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(15);
  })

  it('should return 95 for up to 90 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(90, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(95);
  })

  it('should return 115 for up to 100 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(100, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(115);
  })

  it('should return 135 for up to 110 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(110, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(135);
  })

  it('should return 155 for up to 130 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(130, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(155);
  })

  it('should return 195 for up to 150 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(150, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(195);
  })

  it('should return 505 for up to 170 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(170, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(505);
  })

  it('should return 820 for up to 190 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(190, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(820);
  })

  it('should return 1230 for up to 225 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(225, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(1230);
  })

  it('should return 1750 for up to 255 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(255, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(1750);
  })

  it('should return 2060 for over 255 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(256, FuelType.ALTERNATIVE_FUEL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(2060);
  })

  it('should return zero for the first year of tax for electric', () => {
    const vehicle = new Vehicle(256, FuelType.ELECTRIC, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(0);
  })
})
