import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Order from "./pages/Order";
import Impact from "./pages/Impact";
import Auth from "./pages/Auth";
import VendorDashboard from "./pages/VendorDashboard";
import StorePage from "./pages/StorePage";
import RiderDashboard from "./pages/RiderDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

// Create a new QueryClient instance outside the component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  console.log("Rendering App component");
  
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/order" element={<Order />} />
              <Route path="/impact" element={
                <ProtectedRoute>
                  <Impact />
                </ProtectedRoute>
              } />
              <Route path="/store/*" element={
                <ProtectedRoute>
                  <StorePage />
                </ProtectedRoute>
              } />
              <Route path="/vendor/*" element={
                <ProtectedRoute>
                  <VendorDashboard />
                </ProtectedRoute>
              } />
              <Route path="/rider/*" element={
                <ProtectedRoute>
                  <RiderDashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </AuthProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;