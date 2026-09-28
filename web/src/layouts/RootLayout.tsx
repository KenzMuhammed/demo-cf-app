import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Topbar from "@/layouts/Topbar";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import StartupModal from "@/components/common/StartupModal";
import WhatsappButton from "@/components/common/WhatsappButton";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function RootLayout() {
  return (
    <div className="font-body flex min-h-screen flex-col bg-white text-gray-900 antialiased">
      <ScrollToTop />
      <Topbar />
      <div className="sticky top-0 z-50 w-full">
        <Header />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsappButton />
      <StartupModal />
    </div>
  );
}
