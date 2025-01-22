import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Chioma Okonkwo",
    role: "Restaurant Owner, Lagos",
    content: "Cydex has revolutionized my food delivery service. Their eco-friendly approach aligns perfectly with my sustainable business practices.",
  },
  {
    name: "Oluwaseun Adebayo",
    role: "Student, University of Lagos",
    content: "As a student, I appreciate how Cydex makes campus deliveries efficient and environmentally conscious.",
  },
  {
    name: "Ibrahim Musa",
    role: "Market Vendor, Abuja",
    content: "My customers love that their products are delivered sustainably. Cydex has helped grow my business significantly.",
  },
  {
    name: "Aisha Mohammed",
    role: "Online Store Owner, Port Harcourt",
    content: "The reliability and eco-friendly approach of Cydex has made them an invaluable partner for my e-commerce business.",
  },
  {
    name: "Chidi Okafor",
    role: "Bookstore Owner, Enugu",
    content: "Cydex's commitment to sustainable delivery has helped reduce our carbon footprint while maintaining excellent service.",
  },
  {
    name: "Folake Adeleke",
    role: "Student, Covenant University",
    content: "The convenience of Cydex's service has made campus life so much easier, and I love supporting an eco-friendly initiative.",
  },
  {
    name: "Babajide Ogunleye",
    role: "Café Owner, Ibadan",
    content: "Since partnering with Cydex, our delivery operations have become more efficient and environmentally responsible.",
  },
  {
    name: "Ngozi Eze",
    role: "Fashion Designer, Lagos",
    content: "My customers appreciate that their fashion items are delivered sustainably. It adds value to our brand.",
  },
  {
    name: "Yusuf Garba",
    role: "Student, Ahmadu Bello University",
    content: "Cydex makes it easy to receive packages on campus while supporting environmental sustainability.",
  },
  {
    name: "Blessing Obaseki",
    role: "Grocery Store Owner, Benin City",
    content: "The reliability and eco-conscious approach of Cydex has significantly improved our delivery service.",
  },
  {
    name: "Taiwo Adeniyi",
    role: "Student, University of Ibadan",
    content: "As an environmental science student, I appreciate how Cydex combines convenience with sustainability.",
  },
  {
    name: "Amina Bello",
    role: "Restaurant Owner, Kaduna",
    content: "Cydex's service has helped us expand our delivery radius while maintaining our commitment to sustainability.",
  },
  {
    name: "Emmanuel Obi",
    role: "Pharmacy Owner, Owerri",
    content: "Our customers value the quick and eco-friendly delivery service that Cydex provides.",
  },
  {
    name: "Fatima Usman",
    role: "Student, Bayero University Kano",
    content: "Cydex makes campus deliveries efficient and environmentally friendly. It's the perfect solution for students.",
  },
  {
    name: "Olayinka Adelaja",
    role: "Bookshop Owner, Abeokuta",
    content: "Working with Cydex has helped us reduce our environmental impact while improving delivery efficiency.",
  },
  {
    name: "Chinua Achebe",
    role: "Library Services, Nsukka",
    content: "The sustainable approach of Cydex aligns perfectly with our institutional values.",
  },
  {
    name: "Zainab Ibrahim",
    role: "Student, University of Maiduguri",
    content: "Cydex's service has made campus life more convenient while supporting environmental sustainability.",
  },
  {
    name: "Obinna Nnamdi",
    role: "Market Vendor, Onitsha",
    content: "My customers appreciate the eco-friendly delivery option that Cydex provides.",
  },
  {
    name: "Azeezat Yusuf",
    role: "Student, University of Ilorin",
    content: "The combination of convenience and environmental consciousness makes Cydex the perfect delivery service.",
  },
  {
    name: "Kunle Adeyemi",
    role: "Restaurant Owner, Lagos",
    content: "Cydex has transformed how we handle deliveries, making our service more efficient and environmentally responsible.",
  },
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      if (scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-clash text-[64px] leading-[88px] font-semibold text-left mb-12">
          What Our Customers Say
        </h2>
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white to-cydex-soft border-none min-w-[300px] snap-center"
            >
              <CardContent className="pt-6">
                <p className="text-lg italic">{testimonial.content}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
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