const FAQSection = () => {
  // Example FAQ data
  const faqs = [
    {
      question: "How to reset my password?",
      answer: "Go to settings and click on 'Reset Password'.",
    },
    {
      question: "Where can I find my purchase history?",
      answer:
        "Your purchase history is available in your account settings under 'Purchase History'.",
    },
    {
      question: "How can I edit a user?",
      answer:
        "Click on the users button in the sidebar and there choose a user that you want to edit by clicking pencil button.",
    },
    {
      question: "How can I edit a product?",
      answer:
        "Click on the products button in the sidebar and there choose a product that you want to edit by clicking pencil button.",
    },
    {
      question: "How can I edit a order?",
      answer:
        "Click on the orders button in the sidebar and there choose a order that you want to edit by clicking pencil button.",
    },
    {
      question: "How can I edit a category?",
      answer:
        "Click on the categories button in the sidebar and there choose a category that you want to edit by clicking pencil button.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8">
      <h3 className="text-2xl font-bold leading-7 text-whiteSecondary mb-4">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-blackSecondary p-4">
            <h4 className="font-semibold text-whiteSecondary">
              {faq.question}
            </h4>
            <p className="text-whiteSecondary">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
