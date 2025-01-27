import { Link } from "react-router-dom";
import { Bike, User, ChartBar } from "lucide-react";

export const RiderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-card p-4 space-y-4">
        <nav className="space-y-2">
          <Link
            to="/rider"
            className="flex items-center space-x-2 p-2 hover:bg-accent rounded-lg"
          >
            <Bike className="w-5 h-5" />
            <span>Active Orders</span>
          </Link>
          <Link
            to="/rider/profile"
            className="flex items-center space-x-2 p-2 hover:bg-accent rounded-lg"
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <Link
            to="/rider/stats"
            className="flex items-center space-x-2 p-2 hover:bg-accent rounded-lg"
          >
            <ChartBar className="w-5 h-5" />
            <span>Statistics</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};