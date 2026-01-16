"use client";
import React, { useState } from "react";
import Heading from "../../../layout/Heading";
import faqImg from "../../../assets/fitness-woman.png";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can smartwatch work without phone?",
    answer:
      "Yes, most smartwatches can perform several functions independently, like fitness tracking, music playback, and alarms.",
  },
  {
    question: "What are the features of a smart watch?",
    answer:
      "Smartwatches include features like heart rate monitoring, step counting, GPS, notifications, and sleep tracking.",
  },
  {
    question: "Is the watch water-resistant?",
    answer:
      "Yes, it has an IP68 rating, making it resistant to water, sweat, and dust.",
  },
  {
    question: "Does a smartwatch need a SIM card?",
    answer:
      "Some smartwatches support eSIM or nano SIM for cellular features, but it's optional.",
  },
  {
    question: "Can I track my sleep with this watch?",
    answer:
      "Yes, it provides detailed insights into your sleep patterns including REM cycles and sleep quality.",
  },
  {
    question: "Is the smartwatch compatible with my phone?",
    answer:
      "Yes, it supports both iOS and Android for full feature access via the companion app.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="min-h-[100vh] px-5 md:px-32 py-32 bg-brightBackground overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <Heading
          title1="Frequently Asked"
          title2="Questions"
          color="text-brightOrange"
          paragraph="Inspiration FAQs. Client Guide!"
        />
      </div>

      {/* FAQ Content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 items-stretch gap-8 mt-10">
        {/* FAQ List */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col justify-between gap-4 lg:h-[500px] lg:overflow-hidden">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 cursor-pointer"
              onClick={() => toggle(index)}
              data-aos="fade-up"
            >
              <div className="flex justify-between items-center font-semibold text-lg">
                <span className="text-brightOrange">{faq.question}</span>
                <span className="text-brightOrange">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="hidden lg:flex justify-start items-start lg:h-[500px] overflow-hidden">
          <img
            src={faqImg}
            alt="Woman checking smartwatch for fitness tracking"
            className="w-full h-full object-cover object-top"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
