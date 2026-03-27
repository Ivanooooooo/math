import { assertEquals } from "@std/assert";
import { gcdBruteForce, gcdEuclid } from "./gcd.ts";

Deno.test("gcd of 1 and 1 is 1", () => {
  assertEquals(gcdBruteForce(1, 1), 1);
  assertEquals(gcdEuclid(1, 1), 1);
});

Deno.test("gcd of 2 and 3 is 1", () => {
  assertEquals(gcdBruteForce(2, 3), 1);
  assertEquals(gcdEuclid(2, 3), 1);
});

Deno.test("gcd of 4 and 6 is 2", () => {
  assertEquals(gcdBruteForce(4, 6), 2);
  assertEquals(gcdEuclid(4, 6), 2);
});

Deno.test("gcd of 12 and 18 is 6", () => {
  assertEquals(gcdBruteForce(12, 18), 6);
  assertEquals(gcdEuclid(12, 18), 6);
});

Deno.test("gcd of 0 and 5 is 5", () => {
  assertEquals(gcdBruteForce(0, 5), 5);
  assertEquals(gcdEuclid(0, 5), 5);
});

Deno.test("gcd of 5 and 0 is 5", () => {
  assertEquals(gcdBruteForce(5, 0), 5);
  assertEquals(gcdEuclid(5, 0), 5);
});