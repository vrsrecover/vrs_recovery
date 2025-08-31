"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useInView, motion, animate } from "framer-motion";

export function ServicePromiseSection() {
  const phoneNumber = "447475365247";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const numbers = [
    { value: 24, suffix: "/7", label: "Emergency Response", color: "text-orange-400" },
    { value: 100, suffix: "%", label: "Satisfaction Guaranteed", color: "text-gray-400" },
    { value: 15, suffix: "min", label: "Average Response Time", color: "text-gray-400" },
    { value: 2500, suffix: "+", label: "Vehicles Recovered", color: "text-orange-400" },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // State to hold the animated numbers
  const [counts, setCounts] = useState(numbers.map(() => 0));

  useEffect(() => {
    if (isInView) {
      numbers.forEach((num, idx) => {
        const controls = { value: 0 };
        animate(controls, { value: num.value }, {
          duration: 2.5,
          onUpdate: () => setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[idx] = Math.floor(controls.value);
            return newCounts;
          }),
          ease: "easeOut",
        });
      });
    }
  }, [isInView]);

  return (
    <section className="py-10 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="bg-slate-800 rounded-3xl p-6 md:p-8 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Service Promise
            </h2>
            <p className="text-lg text-gray-300">
              Committed to excellence in every service we provide
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {numbers.map((num, idx) => (
              <div className="text-center" key={idx}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${num.color}`}>
                  {counts[idx]}
                  {num.suffix}
                </div>
                <p className="text-white text-sm md:text-base">{num.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href={`tel:+${phoneNumber}`}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold px-8 py-5 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Need Help Now? Call Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a href={whatsappUrl}>
          <Button
            size="lg"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 
                 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl hover:cursor-pointer
                 transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle className="w-10 h-10" />
          </Button>
        </a>
      </div>
    </section>
  );
}
