import * as tools from "../js/tools.js";

describe("capitalizeFirstCharacter() is correctly implemented", () => {
  test.each`
    input               | expected
    ${"test"}           | ${"Test"}
    ${"this is a test"} | ${"This is a test"}
    ${"Test"}           | ${"Test"}
    ${""}               | ${""}
    ${"123"}            | ${"123"}
  `("convert $input to $expected", ({ input, expected }) => {
    expect(tools.capitalizeFirstCharacter(input)).toBe(expected);
  });
});

test("getTodaysDate() is correctly implemented", () => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const correctDate = currentDate.toLocaleDateString("en-us", options);
  expect(tools.getTodaysDate()).toBe(correctDate);
});
