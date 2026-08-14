import { ChevronDown, Globe, Moon, Plane } from "lucide-react";

export function AppHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-22 w-full max-w-360 items-center justify-between px-5 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center text-[#1463ff]">
            <Plane aria-hidden="true" className="h-9 w-9" strokeWidth={1.8} />
          </div>

          <div>
            <div className="text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#101942]">
              ABHairport Care
            </div>

            <div className="mt-1 text-sm text-slate-600">
              Passenger Assistance Request
            </div>
          </div>
        </div>

        <div className="flex items-center gap-7 text-sm font-medium text-slate-700">
          <button className="hidden items-center gap-2 sm:flex" type="button">
            <Globe
              aria-hidden="true"
              className="h-4.5 w-4.5"
              strokeWidth={1.7}
            />
            <span>English</span>
            <ChevronDown
              aria-hidden="true"
              className="h-4 w-4"
              strokeWidth={1.8}
            />
          </button>

          <button
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-md transition hover:bg-slate-100"
            type="button"
          >
            <Moon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </header>
  );
}
