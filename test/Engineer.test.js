const Engineer = require("../lib/Engineer");

test("Github", () => {
  const test = "Github";
  const eng = new Engineer("George", 1, "pray@god.com", test);
  expect(eng.github).toBe(test);
});

test("getGithub", () => {
  const test = "Github";
  const eng = new Engineer("George", 1, "pray@god.com", test);
  expect(eng.getGithub()).toBe(test);
});

test("getRole", () => {
  const test = "Engineer";
  const eng = new Engineer("George", 1, "pray@god.com", "Github");
  expect(eng.getRole()).toBe(test);
});

