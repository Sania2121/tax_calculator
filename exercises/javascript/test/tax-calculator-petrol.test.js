const { TaxCalculator } = require('../tax-calculator');
const { Vehicle } = require('../vehicle');
const { FuelType } = require('../fuel-type');

describe('Tax calculator on a petrol vehicle for the first year', () => {
  let taxCalculator = new TaxCalculator();
  let FIRST_OF_JAN_2020 = new Date(2020, 1, 1);

  it('should return zero for zero grams of CO2 emissions', () => {
    const vehicle = new Vehicle(0, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(0);
  })

  it('should return 10 for up to 50 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(50, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(10);
  })

  it('should return 25 for up to 75 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(75, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(25);
  })

  it('should return 105 for up to 90 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(90, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(105);
  })

  it('should return 125 for up to 100 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(100, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(125);
  })

  it('should return 145 for up to 110 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(110, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(145);
  })

  it('should return 165 for up to 130 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(130, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(165);
  })

  it('should return 205 for up to 150 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(150, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(205);
  })

  it('should return 515 for up to 170 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(170, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(515);
  })

  it('should return 830 for up to 190 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(190, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(830);
  })

  it('should return 1240 for up to 225 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(225, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(1240);
  })

  it('should return 1760 for up to 255 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(255, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(1760);
  })

  it('should return 2070 for over 255 grams of CO2 emissions', () => {
    const vehicle = new Vehicle(256, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);
    expect(taxCalculator.calculateTax(vehicle)).toBe(2070);
  })
})