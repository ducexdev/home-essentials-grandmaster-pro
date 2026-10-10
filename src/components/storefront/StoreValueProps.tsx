"use client";

export function StoreValueProps() {
  return (
    <section className="bg-white border-b border-[#ebebeb] py-6">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {VALUE_PROPS.map((prop, idx) => (
            <div
              key={prop.title}
              className={`flex items-center gap-4 ${idx !== 0 ? "sm:pl-6 pt-4 sm:pt-0" : ""}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#f0f4fc] border border-[#0052CC]/25 flex items-center justify-center text-[#0052CC] flex-shrink-0 text-xl shadow-sm">
                {prop.icon}
              </div>
              <div>
                <h4 className="font-poppins font-bold text-xs sm:text-sm text-[#0052CC] leading-tight uppercase tracking-wider mb-1">
                  {prop.title}
                </h4>
                <p className="text-[#767676] text-xs leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const VALUE_PROPS = [
  {
    icon: "🚚",
    title: "Nationwide Delivery",
    description: "Daily courier & interstate waybill dispatch to all 36 States.",
  },
  {
    icon: "💵",
    title: "Payment On Delivery",
    description: "Inspect the carton & machine at your door before you pay.",
  },
  {
    icon: "⚡",
    title: "100% Copper Motor",
    description: "25,000 RPM commercial power engineered for tough Nigerian grains.",
  },
  {
    icon: "🛡️",
    title: "1-Year Full Warranty",
    description: "Prompt replacement policy and genuine spare parts guarantee.",
  },
];
