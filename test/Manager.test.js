const Manager = require("../lib/Manager");

test("officeNumber", () => {
  const test = 100;
  const man = new Manager("Martha", 1, "pray@god.com", test);
  expect(man.officeNumber).toBe(test);
});

test("getOfficeNumber", () => {
  const test = 100;
  const man = new Manager("Martha", 1, "pray@god.com", test);
  expect(man.getOfficeNumber()).toBe(test);
});

test("getRole", () => {
  const test = "Manager";
  const man = new Manager("Martha", 1, "pray@god.com", 100);
  expect(man.getRole()).toBe(test);
});

