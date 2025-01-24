import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Leaf } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { MonthlyCarbonSaving, CarbonImpact } from "@/types/database";

const fetchCarbonImpact = async () => {
  console.log("Fetching carbon impact data...");
  const { data: impact, error } = await supabase
    .from("carbon_impacts")
    .select("*")
    .single();
  
  if (error) {
    console.error("Error fetching carbon impact:", error);
    throw error;
  }
  
  return impact as CarbonImpact;
};

const fetchMonthlySavings = async () => {
  console.log("Fetching monthly savings data...");
  const { data: savings, error } = await supabase
    .from("monthly_carbon_savings")
    .select("*")
    .order("month", { ascending: true })
    .limit(6);
  
  if (error) {
    console.error("Error fetching monthly savings:", error);
    throw error;
  }
  
  return savings as MonthlyCarbonSaving[];
};

export const CarbonTracker = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(13);

  const { data: impactData, isError: isImpactError } = useQuery({
    queryKey: ["carbonImpact"],
    queryFn: fetchCarbonImpact,
    retry: 1,
  });

  const { data: monthlyData, isError: isMonthlySavingsError } = useQuery({
    queryKey: ["monthlySavings"],
    queryFn: fetchMonthlySavings,
    retry: 1,
  });

  useEffect(() => {
    if (isImpactError || isMonthlySavingsError) {
      toast.error("Failed to load carbon impact data. Please try again later.");
    }
  }, [isImpactError, isMonthlySavingsError]);

  useEffect(() => {
    if (impactData) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= impactData.co2_saved) {
            clearInterval(timer);
            return impactData.co2_saved;
          }
          return prevCount + 1;
        });
      }, 20);

      return () => clearInterval(timer);
    }
  }, [impactData]);

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

  const chartData = monthlyData?.map((item) => ({
    month: new Date(item.month).toLocaleString('default', { month: 'short' }),
    savings: Number(item.savings),
  })) || [];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-cydex-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

          <div className="h-[400px] bg-white p-6 rounded-lg shadow-lg animate-fadeIn">
            <h3 className="font-clash text-xl font-medium mb-4">
              Monthly CO₂ Savings
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
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