import { Link } from "react-router-dom";
import { RiMailSendLine, RiShoppingCartLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import Button from "@/components/ui/Button";

export default function RfqEmpty() {
  return (
    <section className="flex flex-col bg-slate-50 py-20 lg:py-32">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="relative mb-8 inline-flex items-center justify-center">
            <div className="bg-primary/10 absolute inset-0 animate-pulse rounded-full blur-2xl" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50">
              <RiShoppingCartLine className="h-12 w-12 text-slate-300" />
              <div className="bg-primary absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-white" />
            </div>
          </div>

          <h2 className="font-heading mb-4 text-2xl font-bold text-slate-900">
            Your Quote List is Empty
          </h2>

          <p className="mb-10 leading-relaxed text-slate-500">
            It looks like you haven't added any premium industrial products to your quote request
            yet. Explore our range to get started.
          </p>

          <Link to="/">
            <Button
              size="lg"
              className="group shadow-primary/20 flex w-full items-center justify-center gap-2 px-10 shadow-lg sm:w-auto"
            >
              Explore Our Products
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-200 pt-12 text-left">
            <div>
              <h4 className="mb-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
                Need Help?
              </h4>
              <p className="text-sm text-slate-600">
                Contact our sales team for personalized assistance.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
                Quick Quote?
              </h4>
              <p className="text-sm text-slate-600">Call us directly at the number listed above.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
