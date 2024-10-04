import { QuestionsData } from "@/data";
import { CircleMinus, CirclePlus } from "lucide-react";
import React from "react";

export const FAQ = () => {
  return (
    <section className="container my-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 font-medium">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <ul className="mt-12 sm:max-w-[600px] mx-auto">
        {QuestionsData.map((question, i) => (
          <li className="" key={i}>
            <div className="flex justify-between items-center gap-2">
              <h2 className="text-lg font-medium">{question.title}</h2>

              <div>
                {question.isOpen ? (
                  <CircleMinus className="text-gray-400" />
                ) : (
                  <CirclePlus className="text-gray-400" />
                )}
              </div>
            </div>
            <p className="text-sm mt-4">{question.answer}</p>
            {i !== QuestionsData.length - 1 && (
              <hr className="separator my-8" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
