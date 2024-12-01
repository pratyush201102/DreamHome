import React, { Fragment } from "react";

import TestimonialItems from "../Data/TestimonialItems";

import Client1 from "../../assets/Client1.jpg";
import Client2 from "../../assets/Client2.jpg";
import Client3 from "../../assets/Client3.jpg";
import Client4 from "../../assets/Client4.jpg";

const testimonialData = [
  {
    id: "p1",
    text: "I had a wonderful experience working with this agency! The team helped me find my dream home quickly and made the process so easy. I couldn’t be happier with my new place.",
    name: "Emily Josh",
    image: Client1,
  },
  {
    id: "p2",
    text: "The service was exceptional! They took the time to understand exactly what I was looking for and helped me find the perfect rental. Highly recommend to anyone looking for a stress-free experience.",
    name: "Robert Jack",
    image: Client2,
  },
  {
    id: "p3",
    text: "The real estate agents here really know their stuff. They guided me through every step of the home buying process and made sure I was comfortable. I couldn’t have asked for a better experience.",
    name: "Olivia Ava",
    image: Client3,
  },
  {
    id: "p4",
    text: "A truly professional team! They were always available to answer my questions and provide guidance. Thanks to them, I’m now settled into a beautiful home that I love!",
    name: "Noah Emma",
    image: Client4,
  },
];


const Testimonial = () => {
  const mappedList = <TestimonialItems data={testimonialData} />;
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-between px-auto">
          <div>
            <h1 className="font-Poppins font-bold text-3xl text-left mb-3">
              What Our Client <span className="text-blue">Say</span>
            </h1>
            <p className="text-left text-ash">
              
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row my-6">
          {mappedList}
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
