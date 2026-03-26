import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("circle area and diameter", () => {
  const circle = new Circle(new Point2D(0, 0), 3);
  assertAlmostEquals(circle.area(), Math.PI * 9);
  assertEquals(circle.diameter(), 6);
});

Deno.test("Point2D distanceTo works on diagonal", () => {
  const origin = new Point2D(0, 0);
  const p = new Point2D(3, 4);
  assertEquals(p.distanceTo(origin), 5);
});

Deno.test("Rectangle area/circumference/diagonal", () => {
  const rect = new Rectangle(new Point2D(1, 2), new Point2D(4, 6));
  // width 3, height 4
  assertEquals(rect.area(), 12);
  assertEquals(rect.circumference(), 14); // 2*(3+4)
  assertAlmostEquals(rect.diagonal(), 5);
});

Deno.test("Circle and rectangle handle zero/negative coordinates", () => {
  const circle = new Circle(new Point2D(-5, -5), 0);
  assertEquals(circle.diameter(), 0);
  assertEquals(circle.circumference(), 0);
  assertEquals(circle.area(), 0);

  const rect = new Rectangle(new Point2D(-2, -3), new Point2D(2, 1));
  assertEquals(rect.area(), 16);
  assertEquals(rect.circumference(), 16);
  assertAlmostEquals(rect.diagonal(), Math.sqrt(32));
});
