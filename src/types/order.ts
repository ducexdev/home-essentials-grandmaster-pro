export interface OrderFormData {
  fullName: string;
  phone: string;
  whatsappPhone?: string;
  email?: string;
  state: string;
  city: string;
  address: string;
  variantId: string;
  quantity: number;
  notes?: string;
  consentGiven: boolean;
  // Attribution (from URL params — never trusted for prices)
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  fbclid?: string;
  ttclid?: string;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export interface Order {
  id: string;
  orderReference: string;
  customerName: string;
  customerPhone: string;
  customerWhatsapp?: string;
  customerEmail?: string;
  deliveryState: string;
  deliveryCity: string;
  deliveryAddress: string;
  productSlug: string;
  variantId: string;
  variantName: string;
  quantity: number;
  unitPriceKobo: number;
  totalKobo: number;
  currency: "NGN";
  orderNotes?: string;
  orderStatus: OrderStatus;
  // Attribution
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  fbclid?: string;
  ttclid?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderSubmitResult {
  success: true;
  orderReference: string;
  message: string;
}

export interface OrderSubmitError {
  success: false;
  error: string;
  fieldErrors?: Record<string, string>;
}

export type OrderSubmitResponse = OrderSubmitResult | OrderSubmitError;
