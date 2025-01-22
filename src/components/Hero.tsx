import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/lovable-uploads/bdd69547-07f7-40bc-86fd-3e274a190942.png')",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn text-white">
          Delivering a{" "}
          <span className="text-cydex-primary drop-shadow-lg">
            Greener Planet
          </span>
          , Every Order Counts
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fadeIn drop-shadow-lg">
          Join us in revolutionizing delivery services with our eco-friendly fleet
          of bicycles and electric vehicles. Every delivery brings us closer to a
          sustainable future.
        </p>
        <Button
          className="bg-cydex-primary hover:bg-green-400 text-black text-lg px-8 py-6 rounded-full transition-all duration-300 animate-fadeIn shadow-lg hover:shadow-xl"
          onClick={() => console.log("CTA clicked")}
        >
          Place Your Eco-Friendly Delivery
        </Button>
      </div>
    </section>
  );
};