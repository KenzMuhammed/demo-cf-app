import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import RequestServiceModal from "./RequestServiceModal";
import Toast from "@/components/ui/Toast";
import { FiCheckCircle } from "react-icons/fi";

export default function QuickContactPreventive() {
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [requestService, setRequestService] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section
      className="relative bg-black bg-cover bg-center bg-no-repeat py-24 xl:py-0"
      style={{ backgroundImage: `url('/home/support-banner-2.webp')` }}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative container mx-auto flex flex-col items-center px-6 md:px-10 xl:flex-row xl:gap-12 xl:px-20">
        <div className="flex flex-1 flex-col gap-6 text-center text-white lg:text-left">
          <h1 className="font-heading text-4xl font-bold lg:text-5xl">Request Service Support</h1>
          <p className="text-lg text-gray-100">
            Tell us about your equipment or service requirement and our team will get back to you
            shortly.
          </p>

          <div className="mt-4">
            <div>
              <Button onClick={() => setRequestService(true)} size="lg">
                Service Request
              </Button>
            </div>
            <RequestServiceModal
              open={requestService}
              onClose={() => setRequestService(false)}
              onSubmit={(data) => console.log("Quote Data:", data)}
              onShowToast={() => setShowToast(true)}
            />
          </div>
        </div>
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          title="Request Submitted"
          description="We have received your service request and will contact you shortly."
          variant="success"
          icon={FiCheckCircle}
        />
        <div
          ref={imageRef}
          className={`relative flex-1 transition-transform duration-1000 ease-out ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
          }`}
        >
          <img
            src="/home/welder.webp"
            alt="Equipment Support"
            width={427}
            height={585}
            className="relative z-10 mx-auto -mt-32 hidden xl:block"
          />
        </div>
      </div>
    </section>
  );
}
