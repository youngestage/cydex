import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Leaf } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", savings: 2.4 },
  { month: "Feb", savings: 3.1 },
  { month: "Mar", savings: 4.2 },
  { month: "Apr", savings: 3.8 },
  { month: "May", savings: 5.3 },
  { month: "Jun", savings: 6.2 },
];

export const CarbonTracker = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const targetCount = 156; // Total tons saved
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= targetCount) {
          clearInterval(timer);
          return targetCount;
        }
        return prevCount + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 66) {
          clearInterval(timer);
          return 66;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-cydex-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Stats and Text */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Leaf className="w-8 h-8 text-cydex-primary" />
                <h2 className="font-clash text-3xl md:text-4xl font-semibold">
                  Carbon Footprint Tracker
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                Track your personal and collective environmental impact with every
                eco-friendly delivery you make. Together, we're making a
                difference.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <div className="space-y-2">
                <h3 className="font-clash text-2xl font-medium">
                  Community Impact
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-clash text-4xl md:text-5xl font-bold text-cydex-primary">
                    {count}
                  </span>
                  <span className="text-xl text-gray-600">
                    Tons of CO₂ Saved
                  </span>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-gray-500">
                66% towards our yearly goal
              </p>
            </div>

            <Button
              onClick={() => navigate("/impact")}
              className="w-full md:w-auto bg-cydex-primary hover:bg-cydex-primary/90 text-black font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Track Your Impact
            </Button>
          </div>

          {/* Right Column - Graph */}
          <div className="h-[400px] bg-white p-6 rounded-lg shadow-lg animate-fadeIn">
            <h3 className="font-clash text-xl font-medium mb-4">
              Monthly CO₂ Savings
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="savings"
                  fill="#AFFF64"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};