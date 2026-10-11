"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ProductConfig } from "@/lib/product-config";
import { NIGERIAN_STATES_LIST } from "@/lib/order-schema";
import type { OrderSubmitResponse } from "@/types/order";

interface Props {
  product: ProductConfig;
  selectedVariantId: string;
  onClose: () => void;
}

type FormState = "idle" | "submitting" | "success" | "error";

const EMPTY_ERRORS: Record<string, string> = {};

export function OrderModal({ product, selectedVariantId, onClose }: Props) {
  const [variantId, setVariantId] = useState(selectedVariantId);
  const [quantity, setQuantity] = useState(1);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>(EMPTY_ERRORS);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderReference, setOrderReference] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const availableVariants = product.variants.filter((v) => v.available);
  const selectedVariant = product.variants.find((v) => v.id === variantId);

  // Focus management
  useEffect(() => {
    setTimeout(() => firstFieldRef.current?.focus(), 50);
  }, []);

  // Trap focus in modal and handle Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Focus success message when order succeeds
  useEffect(() => {
    if (formState === "success") {
      setTimeout(() => successRef.current?.focus(), 100);
    }
  }, [formState]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formState === "submitting") return;

    setFormState("submitting");
    setErrors(EMPTY_ERRORS);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    // Read attribution from sessionStorage if available
    let attribution: Record<string, string> = {};
    try {
      const stored = sessionStorage.getItem("he_attribution");
      if (stored) attribution = JSON.parse(stored);
    } catch {}

    const payload = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      whatsappPhone: formData.get("whatsappPhone") as string,
      email: formData.get("email") as string,
      state: formData.get("state") as string,
      city: formData.get("city") as string,
      address: formData.get("address") as string,
      variantId,
      quantity,
      notes: formData.get("notes") as string,
      consentGiven: formData.get("consent") === "on",
      _hp: formData.get("_hp") as string, // honeypot
      ...attribution,
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: OrderSubmitResponse = await res.json();

      if (data.success) {
        setOrderReference(data.orderReference);
        setFormState("success");
      } else {
        setFormState("error");
        setErrorMessage(data.error ?? "An unexpected error occurred. Please try again.");
        if ("fieldErrors" in data && data.fieldErrors) {
          setErrors(data.fieldErrors);
          // Focus first error field
          const firstErrorKey = Object.keys(data.fieldErrors)[0];
          if (firstErrorKey) {
            const el = document.getElementById(`field-${firstErrorKey}`);
            el?.focus();
          }
        }
      }
    } catch {
      setFormState("error");
      setErrorMessage(
        "Unable to connect. Please check your internet connection and try again, or place your order via WhatsApp."
      );
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="relative bg-white w-full sm:max-w-xl sm:rounded-2xl rounded-t-3xl shadow-2xl max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 id="modal-title" className="font-poppins font-bold text-[#0B1F3A] text-lg">
              Order Your German Grinder Machine
            </h2>
            <p className="text-gray-500 text-xs">Fill in your delivery details below.</p>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors flex-shrink-0"
            aria-label="Close order form"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 4L4 12M4 4l8 8"/>
            </svg>
          </button>
        </div>

        {/* Product preview & POD reassurance */}
        <div className="px-6 py-2.5 bg-[#F4F6F8] border-b border-gray-100 flex items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 p-0.5 overflow-hidden flex-shrink-0">
              <Image
                src="/images/hero-grinder-official.png"
                alt="Home Essentials German Grinder Machine"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-[#0B1F3A] font-bold text-xs leading-tight">German Grinder Machine</p>
              <p className="text-gray-500 text-[11px] leading-tight">Pay on Delivery Available</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
            <span>✓</span>
            <span>Zero Risk</span>
          </div>
        </div>

        {/* Success state */}
        {formState === "success" ? (
          <div
            ref={successRef}
            tabIndex={-1}
            className="flex-1 flex flex-col items-center justify-center p-8 text-center focus:outline-none"
          >
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">Order Received!</h3>
            <p className="text-gray-600 text-sm mb-3 max-w-sm">
              Thank you! Your order has been submitted successfully. Our team will
              call you within 24 hours to confirm and arrange delivery.
            </p>
            <div className="bg-[#F4F6F8] rounded-xl px-5 py-3 mb-6">
              <p className="text-gray-500 text-xs mb-1">Your Order Reference</p>
              <p className="font-poppins font-bold text-[#0052CC] text-lg tracking-wider">{orderReference}</p>
            </div>
            <p className="text-gray-500 text-xs max-w-xs">
              Keep this reference handy. You can also reach us on WhatsApp at{" "}
              <a
                href={`https://wa.me/${product.contact.whatsapp}`}
                className="text-[#25D366] font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.contact.whatsappDisplay}
              </a>{" "}
              if you have questions about your order.
            </p>
            <button
              onClick={onClose}
              className="mt-8 bg-[#0B1F3A] hover:bg-[#0052CC] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex-1 overflow-y-auto overscroll-contain"
          >
            {/* Honeypot — hidden from real users */}
            <input type="text" name="_hp" className="absolute -top-[9999px] -left-[9999px]" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="px-6 py-5 space-y-5">
              {/* Global error */}
              {formState === "error" && errorMessage && (
                <div role="alert" className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Variant selector */}
              {availableVariants.length > 1 && (
                <fieldset>
                  <div className="flex items-center justify-between mb-2">
                    <legend className="text-sm font-bold text-[#0B1F3A]">
                      Select Package Size <span className="text-red-500" aria-hidden="true">*</span>
                    </legend>
                    <span className="text-[10px] font-black text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full animate-pulse">
                      Promo: While Stock Lasts!
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableVariants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVariantId(v.id)}
                        className={`p-3 rounded-xl text-left border-2 transition-all flex flex-col justify-between ${
                          variantId === v.id
                            ? "bg-[#0052CC] border-[#0052CC] text-white shadow-md ring-2 ring-[#0052CC]/20"
                            : "bg-white border-gray-200 text-[#344054] hover:border-[#0052CC]/50"
                        }`}
                        aria-pressed={variantId === v.id}
                      >
                        <div className="flex items-center justify-between gap-1 w-full">
                          <span className="font-poppins font-black text-xs sm:text-sm">
                            {v.capacity}
                          </span>
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                            variantId === v.id ? "bg-white/20 text-white" : "bg-rose-50 text-rose-700 border border-rose-200"
                          }`}>
                            Only {v.stockLeft} left!
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1.5 mt-1.5">
                          <span className={`text-sm font-black ${variantId === v.id ? "text-white" : "text-[#0052CC]"}`}>
                            {v.priceDisplay}
                          </span>
                          <span className={`text-[11px] line-through ${variantId === v.id ? "text-white/60" : "text-gray-400"}`}>
                            {v.regularPriceDisplay}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              {/* Quantity */}
              <div>
                <label htmlFor="field-quantity" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center font-bold text-[#0B1F3A] hover:border-[#0052CC] transition-colors"
                    aria-label="Decrease quantity"
                  >−</button>
                  <span id="field-quantity" className="w-8 text-center font-bold text-[#0B1F3A] text-lg" role="status" aria-live="polite">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center font-bold text-[#0B1F3A] hover:border-[#0052CC] transition-colors"
                    aria-label="Increase quantity"
                  >+</button>
                  {selectedVariant && selectedVariant.priceKobo > 0 && (
                    <span className="text-[#344054] text-sm ml-2">
                      = {formatNaira(selectedVariant.priceKobo * quantity)}
                    </span>
                  )}
                </div>
              </div>

              {/* Free Gifts Guaranteed Callout */}
              <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-[#00AEEF] rounded-2xl p-3.5 space-y-1.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black uppercase text-[#0052CC] flex items-center gap-1.5">
                    <span>🎁</span> Free Gifts Included In This Delivery:
                  </p>
                  <span className="text-[10px] font-black uppercase bg-[#00AEEF] text-[#061325] px-2 py-0.5 rounded">
                    FREE
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] font-bold text-[#0B1F3A]">
                  <div className="flex items-center gap-1">
                    <span className="text-[#00AEEF]">★</span> 1 Extra Blade Set
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#00AEEF]">★</span> 1 Sifting Sieve
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#00AEEF]">★</span> 1 Grinder Cleaning Brush
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700">
                    <span>🛡️</span> VIP After-Purchase Support
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <Field
                label="Full Name"
                id="fullName"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                placeholder="e.g. Adaeze Okonkwo"
                error={errors.fullName}
                inputRef={firstFieldRef}
              />

              {/* Phone */}
              <Field
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="e.g. 08012345678"
                error={errors.phone}
                hint="Nigerian number — we'll call to confirm your order"
              />

              {/* WhatsApp (optional) */}
              <Field
                label="WhatsApp Number"
                id="whatsappPhone"
                name="whatsappPhone"
                type="tel"
                autoComplete="tel"
                placeholder="Same as phone or different"
                error={errors.whatsappPhone}
                optional
              />

              {/* Email (optional) */}
              <Field
                label="Email Address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                error={errors.email}
                optional
              />

              {/* State */}
              <div>
                <label htmlFor="field-state" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                  State <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <select
                  id="field-state"
                  name="state"
                  required
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-[#344054] bg-white appearance-none focus:outline-none ${
                    errors.state ? "border-red-400" : "border-gray-200"
                  }`}
                  aria-describedby={errors.state ? "state-error" : undefined}
                  aria-invalid={!!errors.state}
                >
                  <option value="">Select your state</option>
                  {NIGERIAN_STATES_LIST.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.state && (
                  <p id="state-error" role="alert" className="text-red-500 text-xs mt-1">
                    {errors.state}
                  </p>
                )}
              </div>

              {/* City */}
              <Field
                label="City / Town"
                id="city"
                name="city"
                type="text"
                required
                autoComplete="address-level2"
                placeholder="e.g. Ikeja"
                error={errors.city}
              />

              {/* Delivery Address */}
              <div>
                <label htmlFor="field-address" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                  Delivery Address <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="field-address"
                  name="address"
                  required
                  rows={3}
                  autoComplete="street-address"
                  placeholder="Full address including house number, street, and any landmark"
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-[#344054] resize-none focus:outline-none ${
                    errors.address ? "border-red-400" : "border-gray-200"
                  }`}
                  aria-describedby={errors.address ? "address-error" : undefined}
                  aria-invalid={!!errors.address}
                />
                {errors.address && (
                  <p id="address-error" role="alert" className="text-red-500 text-xs mt-1">
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="field-notes" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                  Order Notes <span className="text-gray-400 font-normal text-xs">(optional)</span>
                </label>
                <textarea
                  id="field-notes"
                  name="notes"
                  rows={2}
                  placeholder="Any special instructions or questions"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#344054] resize-none focus:outline-none"
                  maxLength={500}
                />
              </div>

              {/* Privacy consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 w-5 h-5 rounded border-gray-300 text-[#0052CC] flex-shrink-0"
                    aria-describedby={errors.consentGiven ? "consent-error" : undefined}
                    aria-invalid={!!errors.consentGiven}
                  />
                  <span className="text-[#344054] text-xs leading-relaxed">
                    I agree to Home Essentials collecting and processing my personal details
                    to fulfil this order and contact me about it.{" "}
                    <a href="/privacy" className="text-[#0052CC] underline" target="_blank" rel="noopener noreferrer">
                      Privacy Notice
                    </a>
                  </span>
                </label>
                {errors.consentGiven && (
                  <p id="consent-error" role="alert" className="text-red-500 text-xs mt-1">
                    {errors.consentGiven}
                  </p>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 pt-4 border-t border-gray-100 bg-[#F4F6F8] rounded-b-2xl flex-shrink-0">
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full flex items-center justify-center gap-2 bg-[#00AEEF] hover:bg-[#0098d4] disabled:bg-gray-300 disabled:cursor-not-allowed text-[#061325] font-extrabold text-base py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
                aria-busy={formState === "submitting"}
              >
                {formState === "submitting" ? (
                  <>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Placing Order...
                  </>
                ) : (
                  "Complete Order (Pay On Delivery) →"
                )}
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                By ordering, you agree to our terms. We&apos;ll call to confirm before dispatch.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Reusable Field Component ──────────────────

interface FieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

function Field({ label, id, name, type, required, optional, autoComplete, placeholder, error, hint, inputRef }: FieldProps) {
  const describedByParts: string[] = [];
  if (hint) describedByParts.push(`${id}-hint`);
  if (error) describedByParts.push(`${id}-error`);

  return (
    <div>
      <label htmlFor={`field-${id}`} className="block text-sm font-semibold text-[#0B1F3A] mb-2">
        {label}{" "}
        {required && <span className="text-red-500" aria-hidden="true">*</span>}
        {optional && <span className="text-gray-400 font-normal text-xs">(optional)</span>}
      </label>
      <input
        ref={inputRef}
        id={`field-${id}`}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={describedByParts.length > 0 ? describedByParts.join(" ") : undefined}
        className={`w-full border rounded-xl px-4 py-3 text-sm text-[#344054] bg-white focus:outline-none ${
          error ? "border-red-400 bg-red-50" : "border-gray-200"
        }`}
      />
      {hint && <p id={`${id}-hint`} className="text-gray-400 text-xs mt-1">{hint}</p>}
      {error && <p id={`${id}-error`} role="alert" className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function formatNaira(kobo: number): string {
  const naira = kobo / 100;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(naira);
}
