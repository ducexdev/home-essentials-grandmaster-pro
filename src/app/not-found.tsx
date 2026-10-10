import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#155EEF] flex items-center justify-center font-bold text-2xl mb-4">
        404
      </div>
      <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-[#0B1F3A] mb-2">
        Page Not Found
      </h1>
      <p className="text-[#344054] text-sm max-w-sm mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="bg-[#0052CC] hover:bg-[#0041a3] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          Home Essentials
        </Link>
        <Link
          href="/grandmaster-pro"
          className="bg-[#00AEEF] hover:bg-[#0098d4] text-[#061325] font-bold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          Grandmaster Pro
        </Link>
      </div>
    </div>
  );
}
