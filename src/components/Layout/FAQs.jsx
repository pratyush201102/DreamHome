import React, { Fragment } from "react";

import FAQsItem from "../Data/FAQsItem";

const faqsData = [
  {
    id: "q1",
    que: "What should I consider when buying a home?",
    ans: "When buying a home, consider factors like location, budget, the property's condition, and potential for growth. Make sure to get pre-approved for a loan and consult with a real estate agent to guide you through the process.",
  },
  {
    id: "q2",
    que: "How do I know if a property is a good investment?",
    ans: "A good investment property typically has potential for appreciation in value, a solid rental income, and is located in a desirable neighborhood. Research the market trends and consult with experts to ensure a smart investment.",
  },
  {
    id: "q3",
    que: "What is the best way to sell my home?",
    ans: "To sell your home effectively, ensure it's in good condition, stage it well for showings, and price it competitively. Partnering with an experienced agent can help you market the property and handle negotiations.",
  },
  {
    id: "q4",
    que: "How can I rent a home?",
    ans: "To rent a home, start by identifying your needs, such as location, size, and price range. Once you find a property, you will need to submit an application, provide references, and sign a lease agreement. Make sure to read the terms carefully.",
  },
];


const FAQs = () => {
  const mappedList = faqsData.map((item) => (
    <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <h1 className="font-Poppins font-bold text-3xl text-center mb-10">
          Frequently Asked <span className="text-blue">Questions</span>
        </h1>
        <div className="lg:mx-28 mx-0">{mappedList}</div>
      </section>
    </Fragment>
  );
};

export default FAQs;
