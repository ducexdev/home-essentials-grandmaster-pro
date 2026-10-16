/**
 * Grandmaster Pro — Product Configuration
 *
 * ⚠️  CONTENT APPROVAL REQUIRED
 * All prices, variants, and claims marked with [PLACEHOLDER] must be
 * verified and approved by Home Essentials before publication.
 * Do NOT publish unverified prices, wattage, or warranty terms.
 */

export interface ProductVariant {
  id: string;
  name: string;
  capacity: string;
  /** Price in Naira minor units (kobo). */
  priceKobo: number;
  /** Regular/was price in kobo before promo discount. */
  regularPriceKobo: number;
  /** Display string e.g. "₦215,000" */
  priceDisplay: string;
  /** Display string for original price e.g. "₦260,000" */
  regularPriceDisplay: string;
  /** Savings label e.g. "Save ₦45,000" */
  savingsDisplay: string;
  /** Real-time promo stock remaining e.g. 2 */
  stockLeft: number;
  /** Promotional highlight badge */
  badge?: string;
  /** Whether this variant is currently available */
  available: boolean;
  /** Short descriptor shown in the variant selector */
  description?: string;
}

export interface ProductConfig {
  slug: string;
  name: string;
  tagline: string;
  brand: string;
  /** [PLACEHOLDER] Verify actual wattage before publishing */
  wattage: string | null;
  /** [PLACEHOLDER] Verify actual material before publishing */
  material: string | null;
  variants: ProductVariant[];
  /** Delivery policy — verify with business before publishing */
  deliveryPolicy: {
    nationwide: boolean;
    /** [PLACEHOLDER] Verify actual delivery timeline */
    estimatedDays: string;
    /** [PLACEHOLDER] Confirm free delivery policy with business */
    freeDelivery: boolean;
    /** [PLACEHOLDER] Confirm payment on delivery with business */
    paymentOnDelivery: boolean;
    deliveryNote: string;
  };
  /** Warranty/return policy — verify with business before publishing */
  warrantyPolicy: {
    /** [PLACEHOLDER] Confirm warranty duration */
    warrantyYears: number | null;
    /** [PLACEHOLDER] Confirm replacement window */
    replacementDays: number | null;
    /** [PLACEHOLDER] Confirm refund policy */
    moneyBackGuarantee: boolean;
    policyNote: string;
  };
  contact: {
    email: string;
    whatsapp: string;
    whatsappDisplay: string;
    phone?: string;
  };
}

/**
 * ⚠️  ALL PRICES, WATTAGE, VARIANTS AND POLICY DETAILS BELOW ARE PLACEHOLDERS.
 * The business owner must review and approve each field before the page goes live.
 * Replace [PLACEHOLDER] values with verified information from Home Essentials.
 */
export const PRODUCT_CONFIG: ProductConfig = {
  slug: "grandmaster-pro",
  name: "German Grinder Machine",
  tagline: "Grandmaster Pro — Built to Last.",
  brand: "Home Essentials",

  // [PLACEHOLDER] — replace with verified wattage from product documentation
  wattage: null,

  // [PLACEHOLDER] — replace with verified material from product documentation
  material: null,

  variants: [
    {
      id: "gmp-400g",
      name: "German Grinder Machine 400g",
      capacity: "400g",
      priceKobo: 21500000,
      regularPriceKobo: 26000000,
      priceDisplay: "₦215,000",
      regularPriceDisplay: "₦260,000",
      savingsDisplay: "Save ₦45,000",
      stockLeft: 2,
      badge: "Compact Model",
      available: true,
      description: "400g Chamber • Ideal for small households, dried pepper, egusi & spices",
    },
    {
      id: "gmp-500g",
      name: "German Grinder Machine 500g",
      capacity: "500g",
      priceKobo: 28800000,
      regularPriceKobo: 35000000,
      priceDisplay: "₦288,000",
      regularPriceDisplay: "₦350,000",
      savingsDisplay: "Save ₦62,000",
      stockLeft: 3,
      badge: "Popular Starter",
      available: true,
      description: "500g Stainless Chamber • Everyday kitchen flour prep, grains & seasonings",
    },
    {
      id: "gmp-800g",
      name: "German Grinder Machine 800g",
      capacity: "800g",
      priceKobo: 36500000,
      regularPriceKobo: 44000000,
      priceDisplay: "₦365,000",
      regularPriceDisplay: "₦440,000",
      savingsDisplay: "Save ₦75,000",
      stockLeft: 2,
      badge: "Heavy Duty",
      available: true,
      description: "800g High-Output Chamber • Perfect for regular home & soup flour prep",
    },
    {
      id: "gmp-1000g",
      name: "German Grinder Machine 1000g (1kg)",
      capacity: "1000g (1kg)",
      priceKobo: 44500000,
      regularPriceKobo: 55000000,
      priceDisplay: "₦445,000",
      regularPriceDisplay: "₦550,000",
      savingsDisplay: "Save ₦105,000",
      stockLeft: 3,
      badge: "⭐ Most Popular Family Size",
      available: true,
      description: "1kg Heavy-Duty Chamber • The ideal sweet spot for Nigerian families",
    },
    {
      id: "gmp-2000g",
      name: "German Grinder Machine 2000g (2kg)",
      capacity: "2000g (2kg)",
      priceKobo: 56500000,
      regularPriceKobo: 63000000,
      priceDisplay: "₦565,000",
      regularPriceDisplay: "₦630,000",
      savingsDisplay: "Save ₦65,000",
      stockLeft: 3,
      badge: "Semi-Commercial",
      available: true,
      description: "2kg High-Capacity Motor • Great for large households, events & home caterers",
    },
    {
      id: "gmp-3000g",
      name: "German Grinder Machine 3000g (3kg)",
      capacity: "3000g (3kg)",
      priceKobo: 68500000,
      regularPriceKobo: 74000000,
      priceDisplay: "₦685,000",
      regularPriceDisplay: "₦740,000",
      savingsDisplay: "Save ₦55,000",
      stockLeft: 2,
      badge: "Commercial Grade",
      available: true,
      description: "3kg Industrial Swing Chamber • Heavy-duty commercial grinding & restaurants",
    },
    {
      id: "gmp-5000g",
      name: "German Grinder Machine 5000g (5kg)",
      capacity: "5000g (5kg)",
      priceKobo: 81500000,
      regularPriceKobo: 95000000,
      priceDisplay: "₦815,000",
      regularPriceDisplay: "₦950,000",
      savingsDisplay: "Save ₦135,000",
      stockLeft: 2,
      badge: "🔥 Maximum Power",
      available: true,
      description: "5kg Industrial Powerhouse • Maximum commercial volume, mills & food production",
    },
  ],

  deliveryPolicy: {
    nationwide: true, // [PLACEHOLDER] — confirm delivery coverage with business
    estimatedDays: "[AWAITING CONFIRMATION]", // e.g. "3-7 working days"
    freeDelivery: false, // [PLACEHOLDER] — confirm free delivery policy
    paymentOnDelivery: false, // [PLACEHOLDER] — confirm payment on delivery
    deliveryNote:
      "Delivery terms to be confirmed. Contact us for current delivery options.",
  },

  warrantyPolicy: {
    warrantyYears: null, // [PLACEHOLDER] — e.g. 1 or 2
    replacementDays: null, // [PLACEHOLDER] — e.g. 7 or 14
    moneyBackGuarantee: false, // [PLACEHOLDER] — confirm with business
    policyNote:
      "Warranty and return terms to be confirmed. Contact us for current policy details.",
  },

  contact: {
    email: "order@homeessentials.com.ng",
    whatsapp: "2348089208005",
    whatsappDisplay: "+234 808 920 8005",
    phone: "+234 808 920 8005",
  },
};

/**
 * Safely look up a variant by ID.
 * Returns null if the variant is not found or not available.
 */
export function getVariant(variantId: string): ProductVariant | null {
  return (
    PRODUCT_CONFIG.variants.find(
      (v) => v.id === variantId && v.available
    ) ?? null
  );
}

/**
 * Validate that a submitted variant ID and quantity are legitimate.
 * All price calculations must happen server-side using this function.
 */
export function validateVariantAndQuantity(
  variantId: string,
  quantity: number
): { valid: false; error: string } | { valid: true; variant: ProductVariant; totalKobo: number } {
  const variant = getVariant(variantId);
  if (!variant) {
    return { valid: false, error: "Selected variant is not available." };
  }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    return { valid: false, error: "Quantity must be between 1 and 10." };
  }
  if (variant.priceKobo <= 0) {
    return { valid: false, error: "Pricing for this variant is not yet configured. Please contact us to place an order." };
  }
  return {
    valid: true,
    variant,
    totalKobo: variant.priceKobo * quantity,
  };
}
