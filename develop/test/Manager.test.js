
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// describe("Can set office number via constructor argument", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.officeNumber).toBe(testValue);
// });

// describe("getRole() should return \"Manager\"", () => {
//   const testValue = "Manager";
//   const e = new Manager("Foo", 1, "test@test.com", 100);
//   expect(e.getRole()).toBe(testValue);
// });

// describe("Can get office number via getOffice()", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.getOfficeNumber()).toBe(testValue);
// });



test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
