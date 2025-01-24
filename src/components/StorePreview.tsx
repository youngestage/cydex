import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Restaurant, ShoppingBag, Truck, Leaf } from "lucide-react";

const categories = [
  {
    name: "Restaurants",
    icon: Restaurant,
    color: "bg-[#FEF7CD]",
    description: "Eco-friendly food delivery",
  },
  {
    name: "Supermarkets",
    icon: ShoppingBag,
    color: "bg-[#E5DEFF]",
    description: "Sustainable grocery shopping",
  },
  {
    name: "Logistics",
    icon: Truck,
    color: "bg-[#FFDEE2]",
    description: "Green shipping solutions",
  },
  {
    name: "Green Deliveries",
    icon: Leaf,
    color: "bg-[#D3E4FD]",
    description: "Zero-emission delivery",
  },
];

export const StorePreview = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-cydex-soft to-white">
      <div className="container mx-auto max-w-6xl space-y-12 animate-fadeIn">
        <div className="text-center space-y-4">
          <h2 className="font-clash text-3xl md:text-4xl font-semibold">
            Shop Sustainably, Deliver Responsibly
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our eco-conscious marketplace where every delivery contributes to
            a greener future. Experience sustainable shopping with zero-emission
            deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`${category.color} rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
            >
              <div className="space-y-4">
                <category.icon className="w-8 h-8 text-gray-700" />
                <div>
                  <h3 className="font-clash text-xl font-medium">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/store")}
            className="relative px-8 py-6 text-lg font-medium bg-cydex-primary hover:bg-cydex-primary/90 text-black shadow-lg hover:shadow-xl transition-all duration-300 before:absolute before:inset-0 before:border before:border-gray-300 before:border-dashed before:translate-x-1 before:translate-y-1"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};