const Engineer = require("../src/lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Alec", "2", "alec@fakeemail.com", "dsada");

  expect(engineer.name).toBe("Alec");
  expect(engineer.id).toBe("2");
  expect(engineer.email).toBe("alec@fakeemail.com");
  expect(engineer.github).toBe("dsada");
});
