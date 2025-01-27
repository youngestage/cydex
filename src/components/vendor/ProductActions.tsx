import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter, SortAsc, SortDesc } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProductActionsProps {
  selectedProducts: string[];
  onSearch: (query: string) => void;
  onSort: (field: string, direction: "asc" | "desc") => void;
  onBulkAction: (action: "enable" | "disable" | "delete") => void;
}

export function ProductActions({
  selectedProducts,
  onSearch,
  onSort,
  onBulkAction,
}: ProductActionsProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        {selectedProducts.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Bulk Actions ({selectedProducts.length})
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onBulkAction("enable")}>
                Enable Selected
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onBulkAction("disable")}>
                Disable Selected
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => onBulkAction("delete")}
              >
                Delete Selected
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onSort("name", "asc")}>
              <SortAsc className="mr-2 h-4 w-4" />
              Name (A-Z)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSort("name", "desc")}>
              <SortDesc className="mr-2 h-4 w-4" />
              Name (Z-A)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSort("price", "asc")}>
              <SortAsc className="mr-2 h-4 w-4" />
              Price (Low-High)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSort("price", "desc")}>
              <SortDesc className="mr-2 h-4 w-4" />
              Price (High-Low)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-[200px]"
        />
      </div>
    </div>
  );
}