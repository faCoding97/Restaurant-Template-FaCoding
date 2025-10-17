import data from "@/lib/data";
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-8 text-center text-sm text-white/70">
        <p>
          © {new Date().getFullYear()} {data.restaurantInfo.name}. All rights
          reserved.
        </p>
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-6">
          <div className="flex items-center justify-center flex-wrap gap-2 text-center">
            <p className="text-gray-100 flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
              <span className="whitespace-nowrap">Written by:</span>
              <a
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
                href="https://elixcode.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="/logo.png"
                  alt="Elix Code Logo"
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
                Elix Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
