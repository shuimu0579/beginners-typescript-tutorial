import { expect, it } from "vitest";

interface Obj {
  amount: number;
}
type a = number | Obj;

const coerceAmount = (amount: a) => {
  return typeof amount === "object" ? amount.amount : amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
