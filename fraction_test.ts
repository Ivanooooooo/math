import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("fraction subtract, multiply, divide, toString", () => {
  const f1 = new Fraction(5, 4); // 1.25
  const f2 = new Fraction(1, 2); // 0.5

  f1.subtract(f2);
  assertAlmostEquals(f1.toFloat(0.001), 0.75); // 5/4 - 1/2 = 3/4

  f1.multiply(new Fraction(2, 3));
  assertAlmostEquals(f1.toFloat(0.001), 0.5); // 3/4*2/3 = 1/2

  f1.divide(new Fraction(1, 4));
  assertAlmostEquals(f1.toFloat(0.001), 2); // 1/2 / 1/4 = 2

  assertEquals(f1.toString(), "48/24");
});

Deno.test("Fraction.parse accepts trimmed expression", () => {
  const parsed = Fraction.parse("  7 / 8  ");
  assertEquals(parsed.toString(), "7/8");
  assertAlmostEquals(parsed.toFloat(0.001), 0.875);
});

Deno.test("Fraction constructor rejects denominator zero", () => {
  assertThrows(
    () => {
      new Fraction(3, 0);
    },
    Error,
    "denominator must not be zero",
  );
});

Deno.test("Fraction.parse rejects denominator zero", () => {
  assertThrows(
    () => {
      Fraction.parse("3 / 0");
    },
    Error,
    "denominator must not be zero",
  );
});

Deno.test("Fraction.parse rejects malformed expression", () => {
  assertThrows(
    () => {
      Fraction.parse("1-2");
    },
    Error,
    "illegal syntax",
  );
});

Deno.test("Fraction.parse rejects non-numeric input", () => {
  assertThrows(
    () => {
      Fraction.parse("a / b");
    },
    Error,
    "non-numeric",
  );
});

Deno.test("Fraction operations with negative values and zero", () => {
  const f1 = new Fraction(-1, 2);
  const f2 = new Fraction(1, -3);

  f1.add(f2);
  assertAlmostEquals(f1.toFloat(0.001), -0.333, 0.001);

  f1.subtract(new Fraction(-1, 2));
  assertAlmostEquals(f1.toFloat(0.001), -0.833, 0.001);

  f1.multiply(new Fraction(0, 1));
  assertEquals(f1.toString(), "0/6");

  f1.divide(new Fraction(1, 1));
  assertEquals(f1.toString(), "0/6");
});


