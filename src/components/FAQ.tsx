import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Cydex ensure eco-friendly deliveries?",
    answer:
      "We exclusively use bicycles and electric vehicles for all our deliveries, ensuring zero direct emissions. Our routing system optimizes for the most efficient paths.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "We currently operate in major metropolitan areas with plans to expand. Check our coverage map for specific service areas.",
  },
  {
    question: "How fast are your delivery times?",
    answer:
      "Most local deliveries are completed within 2-3 hours. Specific timing depends on distance and current demand.",
  },
  {
    question: "Do you offer business solutions?",
    answer:
      "Yes! We offer customized delivery solutions for businesses of all sizes. Contact our business team for more information.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-cydex-soft">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};