"use client";

import { useState } from "react";
import type { ProductConfig } from "@/lib/product-config";

interface Props {
  product: ProductConfig;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection({ product }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Do I have to pay any money before delivery?",
      answer:
        "ABSOLUTELY NOT! We operate 100% Pay on Delivery nationwide across all 36 states and Abuja FCT. You pay zero Naira upfront. When our delivery partner brings the parcel to your doorstep, you are free to open the box, inspect the machine, check the free bonus blade set and accessories, before paying via cash or bank transfer.",
    },
    {
      question: "What items and accessories are included inside the box?",
      answer:
        "Every Grandmaster Pro box comes fully equipped with: (1) Heavy-duty pulverizer machine with pure copper motor, (2) FREE Extra 6-leaf stainless blade replacement assembly, (3) FREE 2x replacement carbon brushes, (4) FREE stainless steel sifting sieve, (5) FREE soft cleaning brush, (6) Food pusher / tamper bar, and (7) Comprehensive instruction manual.",
    },
    {
      question: "Can it really crush hard Nigerian food staples like dried yam (elubo) and corn?",
      answer:
        "Yes! The 25,000 RPM high-torque pure copper motor and 304 food-grade surgical steel blades are specifically built for hard dry items. It effortlessly crushes dried yam slices (for elubo), hard yellow corn (for pap/ogi), dried beans (for bean flour/akara), melon seeds (egusi), ogbono, dried chili pepper, tiger nuts, and dried crayfish into ultra-smooth flour in under 2 minutes.",
    },
    {
      question: "How long does delivery take to my state?",
      answer:
        "Orders within Lagos, Abuja FCT, and Port Harcourt are typically delivered within 24 to 48 hours. Orders to all other states across Nigeria take 2 to 4 business days via insured express interstate dispatch. Our delivery agent will always call your phone number before arriving at your address.",
    },
    {
      question: "Can it run on a 'Tiger' or medium-sized generator?",
      answer:
        "The Grandmaster Pro connects to standard 220V–240V home wall outlets. Because of its high-torque industrial copper motor, it is best powered by NEPA/PHCN mains power or a generator rated 2.5kVA and above (it cannot run on a small 0.9kVA 'I-pass-my-neighbor' generator).",
    },
    {
      question: "What is your warranty and guarantee policy?",
      answer:
        "Every machine is backed by our official 1-Year Comprehensive Warranty and a 14-Day Immediate Swap Policy. If your machine encounters any manufacturer defect, our dedicated customer service team will service or replace it immediately.",
    },
    {
      question: "How do I place my order right now?",
      answer:
        "Simply click any 'Order Now' button on this page, select your preferred capacity model (from 400g up to 5000g), fill in your delivery name, phone number, and address. We will immediately phone you to confirm your order and dispatch your parcel.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 bg-[#F4F6F8] border-b border-gray-200"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-14 reveal-on-scroll">
          <span className="inline-block text-[#0052CC] font-black text-xs uppercase tracking-widest mb-2 bg-[#f0f4fc] px-3.5 py-1 rounded-full border border-[#0052CC]/20">
            BUYER QUESTIONS ANSWERED
          </span>
          <h2 id="faq-heading" className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F3A] mb-3 sm:mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-[#344054] text-sm sm:text-base lg:text-lg leading-relaxed">
            Clear, honest answers to the top questions asked by our Nigerian customers before ordering.
          </p>
        </div>

        <div className="space-y-3.5 reveal-on-scroll" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 shadow-sm overflow-hidden ${
                openIndex === i ? "border-[#0052CC] shadow-md ring-2 ring-[#0052CC]/15" : "border-gray-200 hover:border-gray-300"
              }`}
              role="listitem"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus-visible:outline-[#0052CC]"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="font-black text-[#0B1F3A] text-sm sm:text-base leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`text-[#0052CC] flex-shrink-0 transition-transform duration-200 w-8 h-8 rounded-full bg-[#f0f4fc] flex items-center justify-center ${
                    openIndex === i ? "rotate-180 bg-[#0052CC] text-white" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={openIndex !== i}
              >
                <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475467] leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal-on-scroll">
          <p className="text-[#344054] text-xs sm:text-sm mb-4 font-medium">Still have a question or need special delivery arrangements?</p>
          <a
            href={`https://wa.me/${product.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-black px-7 py-4 rounded-xl transition-all text-xs sm:text-sm shadow-lg shadow-green-500/20 active:scale-95 uppercase tracking-wider"
          >
            <span>💬</span>
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
