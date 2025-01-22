import { PlayCircle } from "lucide-react";

export const About = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="font-clash text-[36px] leading-[48px] md:text-[48px] md:leading-[64px] font-semibold mb-6">
        Cydex: Delivering a Greener Future
      </h2>
      <div className="relative w-full max-w-4xl mx-auto mb-8">
        <img
          src="/about.jpg"
          alt="Our story"
          className="w-full rounded-lg object-cover"
        />
          <PlayCircle className="w-12 h-12" />
        </button>
      </div>
      <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        We are leading the way in eco-friendly logistics, revolutionizing delivery with
        carbon-conscious solutions. Our mission is to reduce emissions and build a community
        that values a greener future. At Cydex, every order isn't just a delivery—it's a step
        towards a cleaner, more sustainable world for generations to come.
      </p>
    </section>
  );
};