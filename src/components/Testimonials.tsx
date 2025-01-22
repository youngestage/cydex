import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Business Owner",
    content:
      "Cydex has transformed how we handle our deliveries. Their eco-friendly approach aligns perfectly with our values.",
  },
  {
    name: "Maria Garcia",
    role: "Restaurant Manager",
    content:
      "Not only are they reliable, but knowing our deliveries are carbon-neutral makes us proud to partner with Cydex.",
  },
  {
    name: "James Wilson",
    role: "Retail Director",
    content:
      "The efficiency and environmental consciousness of Cydex's service is exactly what our business needed.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-gradient-to-br from-white to-cydex-soft border-none"
            >
              <CardHeader>
                <p className="text-lg italic">{testimonial.content}</p>
              </CardHeader>
              <CardFooter className="flex flex-col">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};