// *********************
// Role of the component: The component that displays frequesntly asked questions
// Name of the component: FAQSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <FAQSection faqs={faqs} />
// Input parameters: faqs: { question: string; answer: string }[]
// Output: frequently asked questions
// *********************

const FAQSection = ({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8">
      <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary mb-4">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="dark:bg-blackSecondary bg-white p-4">
            <h4 className="font-semibold dark:text-whiteSecondary text-blackPrimary">
              {faq.question}
            </h4>
            <p className="dark:text-whiteSecondary text-blackPrimary">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
