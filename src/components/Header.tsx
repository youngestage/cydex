import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Mock authentication state - in a real app, this would come from your auth system
const isLoggedIn = false; // Replace with actual auth state
const userName = "John"; // Replace with actual user name

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Cydex Logo" className="h-10" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="font-clash text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/about" className="font-clash text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/services" className="font-clash text-gray-600 hover:text-gray-900">Services</Link>
              <Link to="/contact" className="font-clash text-gray-600 hover:text-gray-900">Contact</Link>
            </nav>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button className="border border-black bg-white hover:bg-cydex-primary/80 text-black">
                    Dashboard
                  </Button>
                </Link>
                <Link to="/account" className="text-gray-600 hover:text-gray-900">
                  <User size={24} />
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <Button className="border border-black bg-white hover:bg-cydex-primary/80 text-black">
                  Contact Us
                </Button>
              </Link>
            )}
          </div>
          
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="/" className="font-clash text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/about" className="font-clash text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/services" className="font-clash text-gray-600 hover:text-gray-900">Services</Link>
              <Link to="/contact" className="font-clash text-gray-600 hover:text-gray-900">Contact</Link>
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className="font-clash text-gray-600 hover:text-gray-900">
                    Dashboard
                  </Link>
                  <Link to="/account" className="font-clash text-gray-600 hover:text-gray-900">
                    My Account
                  </Link>
                </>
              ) : (
                <Link to="/login">
                  <Button className="bg-cydex-primary hover:bg-green-400 text-black w-full">
                    Contact Us
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