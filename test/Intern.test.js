const Intern = require("../lib/Intern");

test("scho", () => {
  const test = "ut";
  const int = new Intern("Jeanne", 1, "pray@god.com", test);
  expect(int.school).toBe(test);
});

test("getScho", () => {
  const test = "ut";
  const int = new Intern("Jeanne", 1, "pray@god.com", test);
  expect(int.getSchool()).toBe(test);
});

test("getRole", () => {
  const test = "Intern";
  const int = new Intern("Jeanne", 1, "pray@god.com", "ut");
  expect(int.getRole()).toBe(test);
});

