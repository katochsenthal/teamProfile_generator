const Intern = require("../src/lib/Intern");

test("creating intern object", () => {
  const intern = new Intern("Sam", "11", "sam@noemail.com", "UofT");

  expect(intern.name).toBe("Sam");
  expect(intern.id).toBe("11");
  expect(intern.email).toBe("sam@noemail.com");
  expect(intern.school).toBe("UofT");
});
