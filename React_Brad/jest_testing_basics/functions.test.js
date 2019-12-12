const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be Null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("user should be Mayank Solan object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Mayank",
    lastName: "Solan"
  });
});

//less then greater then
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

//Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

//Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "mayank", "admin"];
  expect(usernames).toContain("admin");
});

// Promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
