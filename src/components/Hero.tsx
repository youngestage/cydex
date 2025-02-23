import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  // Mock authentication state - in a real app, this would come from your auth system
  const isLoggedIn = false;
  const userName = "John";

  return (
    <section 
      className="relative min-h-[75vh] md:min-h-[90vh] flex items-end bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/heroimage.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
      
      <div className="container mx-auto px-4 py-16 text-left relative z-10 mb-12">
        <div className="max-w-2xl">
          {isLoggedIn && (
            <p className="text-white text-xl mb-4 animate-fadeIn">
              Welcome back, {userName}!
            </p>
          )}
          <h1 className="font-clash text-[32px] leading-[40px] md:text-[48px] md:leading-[64px] lg:text-[48px] lg:leading-[64px] font-semibold mb-6 animate-fadeIn text-white">
            Delivering a{" "}
            <span className="text-cydex-primary drop-shadow-lg">
              Greener Planet
            </span>
            , Every Order Counts
          </h1>
          <p className="text-sm md:text-base lg:text-xl text-white mb-8 animate-fadeIn drop-shadow-lg">
            Join us in revolutionizing delivery services with our eco-friendly fleet
            of bicycles and electric vehicles. Every delivery brings us closer to a
            sustainable future.
          </p>
          <Button
            className="bg-cydex-primary hover:bg-cydex-primary/80 text-black text-lg px-8 py-6 transition-all duration-300 animate-fadeIn shadow-lg hover:shadow-xl"
            onClick={() => navigate("/order")}
          >
            Place Your Eco-Friendly Delivery
          </Button>
        </div>
      </div>
    </section>
  );
};