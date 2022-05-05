const Employee = require("../src/lib/Employee");

test("creating employee object", () => {
  const employee = new Employee("Sam", "11", "sam@noemail.com");

  expect(employee.name).toBe("Sam");
  expect(employee.id).toBe("11");
  expect(employee.email).toBe("sam@noemail.com");
});
