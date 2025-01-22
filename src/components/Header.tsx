import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
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
            
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={18} />
              </a>
            </div>
            
            <Button className="border border-black bg-white hover:bg-cydex-primary/80 text-black">
              Contact Us
            </Button>
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
              <div className="flex space-x-4 py-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Facebook size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Twitter size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Instagram size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={18} />
                </a>
              </div>
              <Button className="bg-cydex-primary hover:bg-green-400 text-black w-full">
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};