import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("Order and Product Validation Logic", () => {
  it("should validate Nigerian phone number formats", () => {
    const nigerianPhoneRegex = /^(\+?234|0)[789]\d{9}$/;
    
    // Valid numbers
    assert.equal(nigerianPhoneRegex.test("08012345678"), true);
    assert.equal(nigerianPhoneRegex.test("+2348012345678"), true);
    assert.equal(nigerianPhoneRegex.test("2348012345678"), true);
    assert.equal(nigerianPhoneRegex.test("07045787045"), true);
    assert.equal(nigerianPhoneRegex.test("09098765432"), true);

    // Invalid numbers
    assert.equal(nigerianPhoneRegex.test("01234567890"), false); // Wrong prefix
    assert.equal(nigerianPhoneRegex.test("123456789"), false); // Too short
    assert.equal(nigerianPhoneRegex.test("080123456789"), false); // Too long
    assert.equal(nigerianPhoneRegex.test("abc08012345678"), false); // Letters
  });

  it("should enforce integer bounds on quantity", () => {
    function validateQuantity(qty) {
      if (!Number.isInteger(qty) || qty < 1 || qty > 10) {
        return false;
      }
      return true;
    }

    assert.equal(validateQuantity(1), true);
    assert.equal(validateQuantity(5), true);
    assert.equal(validateQuantity(10), true);
    assert.equal(validateQuantity(0), false);
    assert.equal(validateQuantity(11), false);
    assert.equal(validateQuantity(1.5), false);
    assert.equal(validateQuantity(-2), false);
  });

  it("should calculate total price in kobo to prevent floating point inaccuracies", () => {
    function calculateTotalKobo(unitPriceKobo, quantity) {
      return unitPriceKobo * quantity;
    }

    const unitPriceKobo = 4500000; // ₦45,000.00
    const qty = 3;
    const totalKobo = calculateTotalKobo(unitPriceKobo, qty);
    
    assert.equal(totalKobo, 13500000);
    assert.equal(totalKobo / 100, 135000);
  });
});
