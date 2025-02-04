
import { Product } from "@/types/store";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = async () => {
    if (!user) {
      toast.error("Please login to add items to cart");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.from("cart_items").upsert({
        user_id: user.id,
        product_id: product.id,
        quantity: 1,
      });

      if (error) throw error;
      toast.success("Added to cart!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group relative bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg">
        <img
          src={product.image_url || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              onClick={addToCart}
              disabled={isLoading || !product.available}
              variant="secondary"
              size="icon"
              className={cn("h-8 w-8", !product.available && "opacity-50")}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
