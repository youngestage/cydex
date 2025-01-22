import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-end bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/heroimage.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
      
      <div className="container mx-auto px-4 py-16 text-left relative z-10 mb-12">
        <div className="max-w-2xl">
          <h1 className="font-clash text-[64px] leading-[88px] font-semibold mb-6 animate-fadeIn text-white">
            Delivering a{" "}
            <span className="text-cydex-primary drop-shadow-lg">
              Greener Planet
            </span>
            , Every Order Counts
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 animate-fadeIn drop-shadow-lg">
            Join us in revolutionizing delivery services with our eco-friendly fleet
            of bicycles and electric vehicles. Every delivery brings us closer to a
            sustainable future.
          </p>
          <Button
            className="bg-cydex-primary hover:bg-green-400 text-black text-lg px-8 py-6 transition-all duration-300 animate-fadeIn shadow-lg hover:shadow-xl"
            onClick={() => console.log("CTA clicked")}
          >
            Place Your Eco-Friendly Delivery
          </Button>
        </div>
      </div>
    </section>
  );
};