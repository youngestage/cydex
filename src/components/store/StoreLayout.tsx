import { Link } from "react-router-dom";
import { ShoppingCart, Package, ChartBar } from "lucide-react";

export const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen pt-16">
      <aside className="w-64 border-r bg-card p-4 space-y-4">
        <nav className="space-y-2">
          <Link
            to="/store"
            className="flex items-center space-x-2 p-2 hover:bg-accent rounded-lg"
          >
            <Package className="w-5 h-5" />
            <span>Products</span>
          </Link>
          <Link
            to="/store/cart"
            className="flex items-center space-x-2 p-2 hover:bg-accent rounded-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </Link>
          <Link
            to="/store/orders"
            className="flex items-center space-x-2 p-2 hover:bg-accent rounded-lg"
          >
            <ChartBar className="w-5 h-5" />
            <span>Order History</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};