import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Plus, Search, Filter, Edit, Trash2, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/AuthContext";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string | null;
  image_url: string | null;
  available: boolean | null;
  created_at: string;
  updated_at: string;
}

const Products = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products, isLoading } = useQuery({
    queryKey: ["vendor-products", user?.id],
    queryFn: async () => {
      console.log("Fetching products for vendor:", user?.id);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("vendor_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
        throw error;
      }

      return data as Product[];
    },
    enabled: !!user?.id,
  });

  const stats = {
    total: products?.length || 0,
    active: products?.filter((p) => p.available).length || 0,
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
        </div>
        <Skeleton className="h-96" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Total Products
          </h3>
          <p className="mt-2 text-3xl font-bold">{stats.total}</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Active Products
          </h3>
          <p className="mt-2 text-3xl font-bold">{stats.active}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2" />
            Add Product
          </Button>
          <Button variant="outline">
            <Filter className="mr-2" />
            Filter
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-md border pl-9 pr-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Products Table */}
      {products && products.length > 0 ? (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        product.available
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.available ? "Active" : "Inactive"}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(product.updated_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <ImageIcon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-medium">No products yet</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Get started by adding your first product.
          </p>
          <Button className="mt-4">
            <Plus className="mr-2" />
            Add Product
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;