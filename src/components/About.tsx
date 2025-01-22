export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Cydex: Delivering a Greener Future
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              At Cydex, we're revolutionizing the delivery industry by putting
              sustainability at the heart of everything we do. Our mission is to
              create a zero-emission delivery network that serves both our
              customers and our planet.
            </p>
            <p className="text-lg text-gray-600">
              Through our innovative use of bicycles and electric vehicles, we're
              reducing carbon emissions while providing fast, reliable delivery
              services. Join us in our journey towards a greener future.
            </p>
          </div>
          <div className="bg-cydex-soft rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">100%</h3>
                <p className="text-gray-600">Eco-Friendly Fleet</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">50K+</h3>
                <p className="text-gray-600">Green Deliveries</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">30%</h3>
                <p className="text-gray-600">Carbon Reduction</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};