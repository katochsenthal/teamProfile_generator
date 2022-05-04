const Manager = require("../lib/Manager");

test("creating Manager object", () => {
  const manager = new Manager("Sam", "11", "sam@noemail.com", "2222");

  expect(manager.name).toBe("Sam");
  expect(manager.id).toBe("11");
  expect(manager.email).toBe("sam@noemail.com");
  expect(manager.officeNumber).toBe("2222");
});
