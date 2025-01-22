export const About = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="font-clash text-[36px] leading-[48px] md:text-[36px] md:leading-[48px] font-semibold mb-6 text-center">
        Cydex: Delivering a Greener Future
      </h2>
      <div className="relative w-full max-w-4xl mx-auto mb-8">
        <img
          src="/about.jpg"
          alt="Our story"
          className="w-full rounded-lg object-cover"
        />
      </div>
      <p className="text-2xl block md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-left">
        We are leading the way in eco-friendly logistics, revolutionizing delivery with
        carbon-conscious solutions. Our mission is to reduce emissions and build a community
        that values a greener future. At Cydex, every order isn't just a delivery—it's a step
        towards a cleaner, more sustainable world for generations to come.
      </p>
    </section>
  );
};
