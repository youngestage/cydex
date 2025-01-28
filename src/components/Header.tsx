import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userRole, signOut, loading } = useAuth();

  const getDashboardInfo = () => {
    switch (userRole) {
      case 'vendor':
        return { route: '/vendor', text: 'Vendor Dashboard' };
      case 'rider':
        return { route: '/rider', text: 'Rider Dashboard' };
      case 'customer':
        return { route: '/store', text: 'Store' };
      default:
        return { route: '/auth', text: 'Dashboard' };
    }
  };

  const renderAuthButton = () => {
    if (loading) {
      return <Skeleton className="h-10 w-10 rounded-full" />;
    }

    if (user && userRole) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarFallback className="bg-cydex-primary/20">
                  {user.email?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link to={getDashboardInfo().route} className="cursor-pointer">
                {getDashboardInfo().text}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link to="/auth">
        <Button className="bg-cydex-primary hover:bg-cydex-primary/80 text-black">
          Login
        </Button>
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Cydex Logo" className="h-10" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="font-clash text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/about" className="font-clash text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link to="/services" className="font-clash text-gray-600 hover:text-gray-900">
                Services
              </Link>
              <Link to="/contact" className="font-clash text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </nav>
            {renderAuthButton()}
          </div>
          
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="/" className="font-clash text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/about" className="font-clash text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link to="/services" className="font-clash text-gray-600 hover:text-gray-900">
                Services
              </Link>
              <Link to="/contact" className="font-clash text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              {user && userRole && (
                <Link to={getDashboardInfo().route} className="font-clash text-gray-600 hover:text-gray-900">
                  {getDashboardInfo().text}
                </Link>
              )}
              {user ? (
                <Button
                  onClick={() => signOut()}
                  variant="ghost"
                  className="justify-start px-2"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <Link to="/auth">
                  <Button className="w-full bg-cydex-primary hover:bg-cydex-primary/80 text-black">
                    Login
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};