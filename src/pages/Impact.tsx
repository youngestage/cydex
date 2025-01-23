import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Leaf, Users, TrendingUp } from "lucide-react";

const personalData = [
  { month: "Jan", savings: 1.2 },
  { month: "Feb", savings: 1.8 },
  { month: "Mar", savings: 2.1 },
  { month: "Apr", savings: 1.9 },
  { month: "May", savings: 2.4 },
  { month: "Jun", savings: 2.8 },
];

const communityData = [
  { month: "Jan", total: 120 },
  { month: "Feb", total: 180 },
  { month: "Mar", total: 220 },
  { month: "Apr", total: 280 },
  { month: "May", total: 350 },
  { month: "Jun", total: 420 },
];

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-cydex-soft py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="font-clash text-4xl md:text-5xl font-bold mb-6">
              Track Your Carbon Footprint Impact
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              See the difference you're making! With every delivery placed through Cydex, 
              you're helping reduce carbon emissions and build a sustainable future. Use our 
              Carbon Footprint Tracker to visualize your contributions to the environment.
            </p>
          </div>
        </section>

        {/* Personal Statistics Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-cydex-primary" />
                  <h2 className="font-clash text-3xl font-semibold">
                    Your Sustainable Journey
                  </h2>
                </div>
                <p className="text-gray-600">
                  Discover how your deliveries contribute to reducing carbon emissions. 
                  Track your progress over time and see how your efforts align with the 
                  community's collective impact.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-clash text-2xl mb-4">Personal Impact</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={personalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="savings" fill="#AFFF64" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-cydex-primary" />
                  <h2 className="font-clash text-3xl font-semibold">
                    Community Impact
                  </h2>
                </div>
                <p className="text-gray-600">
                  Join a growing community of climate-conscious individuals making a real 
                  difference. See collective statistics and how we're working together.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-clash text-2xl mb-4">Collective Progress</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={communityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="total" 
                          stroke="#AFFF64" 
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content Section */}
        <section className="bg-cydex-gray py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-cydex-primary" />
              <h2 className="font-clash text-3xl font-semibold">Why It Matters</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-clash text-xl font-semibold mb-4">
                  Climate Impact
                </h3>
                <p className="text-gray-600">
                  Reducing carbon emissions helps combat climate change and ensures 
                  a healthier planet for future generations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-clash text-xl font-semibold mb-4">
                  Air Quality
                </h3>
                <p className="text-gray-600">
                  By choosing eco-friendly deliveries, you're contributing to cleaner 
                  air in your community and better health for everyone.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-clash text-xl font-semibold mb-4">
                  Future Impact
                </h3>
                <p className="text-gray-600">
                  Every sustainable choice adds up. Track your progress and inspire 
                  others to join the movement for a greener future.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button className="bg-cydex-primary hover:bg-cydex-primary/90 text-black font-medium px-8 py-6 text-lg">
                Track Your Impact Now and Inspire Change!
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;