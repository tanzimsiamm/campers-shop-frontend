import { useState } from "react";

const faqs = [
    {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy on all unused and unopened products, giving you the flexibility to ensure the product is right for you. If for any reason you're not satisfied, contact our support team to initiate the return process. Please note that all returns must include the original packaging, and items that have been used or damaged are not eligible for return. Refunds are processed within 5-7 business days once the item is received and inspected.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Shipping typically takes 5-7 business days for standard delivery within the country, though this may vary depending on your location. For customers requiring faster service, we offer expedited shipping options that can deliver your product within 2-3 business days. Shipping times for international orders vary depending on the destination, with an average delivery time of 10-15 business days. You can track your order once it has been shipped using the tracking number provided.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Yes, we do! We offer international shipping to a wide range of countries. When checking out, you can select your country from the dropdown menu to see if it's included in our shipping regions. International shipping rates and times will be calculated based on your location. Please be aware that additional customs fees, duties, and taxes may apply depending on your country's import regulations, and these fees are the responsibility of the customer.",
      },
      {
        question: "Can I cancel or modify my order?",
        answer:
          "Yes, you can cancel or modify your order within 24 hours of placing it. After this window, the order will be processed and prepared for shipping, making it more difficult to make changes. If you need to update shipping information, change the product, or cancel the order, please contact our customer service team as soon as possible. We strive to accommodate all requests but cannot guarantee modifications after 24 hours.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order has been processed and shipped, you will receive an email confirmation with a tracking number. This number can be used to monitor the status and location of your shipment through our website's order tracking page. Depending on the shipping provider, tracking updates may be available within 24-48 hours of shipment. If you experience any delays or issues with tracking, feel free to reach out to our customer service team for assistance.",
      },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 px-6 bg-gray-100 rounded-lg focus:outline-none flex justify-between items-center"
              >
                <span className="text-xl font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-gray-600">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-6 bg-gray-50 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
