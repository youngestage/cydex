import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-cydex-soft to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Delivering a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cydex-primary to-green-400">
            Greener Planet
          </span>
          , Every Order Counts
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn">
          Join us in revolutionizing delivery services with our eco-friendly fleet
          of bicycles and electric vehicles. Every delivery brings us closer to a
          sustainable future.
        </p>
        <Button
          className="bg-cydex-primary hover:bg-green-400 text-black text-lg px-8 py-6 rounded-full transition-all duration-300 animate-fadeIn"
          onClick={() => console.log("CTA clicked")}
        >
          Place Your Eco-Friendly Delivery
        </Button>
      </div>
    </section>
  );
};