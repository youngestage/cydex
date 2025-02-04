
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Package, ChartBar } from "lucide-react";
import { cn } from "@/lib/utils";

export const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex min-h-screen pt-16">
      <aside className="hidden md:flex w-64 flex-col border-r bg-card fixed h-[calc(100vh-4rem)] top-16">
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="space-y-1 px-3">
            <Link
              to="/store"
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors",
                isActive("/store") && "bg-accent"
              )}
            >
              <Package className="h-5 w-5" />
              <span>Products</span>
            </Link>
            <Link
              to="/store/cart"
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors",
                isActive("/store/cart") && "bg-accent"
              )}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Link>
            <Link
              to="/store/orders"
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors",
                isActive("/store/orders") && "bg-accent"
              )}
            >
              <ChartBar className="h-5 w-5" />
              <span>Order History</span>
            </Link>
          </nav>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto md:pl-64">
        <div className="container py-6">
          {children}
        </div>
      </main>
    </div>
  );
};
